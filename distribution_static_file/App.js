const http = require('http');

const { readFileSync } = require('fs');

const homePage = readFileSync('./Navbar/index.html');

const homeStyles = readFileSync('./Navbar/styles.css');

const homeLogic = readFileSync('./Navbar/script.js');
const about = readFileSync('./Navbar/about.html');
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  // Home page route
  // console.log(req.body);

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(homePage);
    // console.log(res.body);

    res.end();
  }


  // About page route
  else if (url === '/about.html') {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(about);
    res.end();
  }
  else if (url === '/styles.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }
  else if (url === '/script.js') {
    res.writeHead(200, { 'Content-Type': 'text/js' });
    res.write(homeLogic);
    res.end();
  }

  // 404 Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
})
// Start the server
server.listen(4000, () => {
  console.log("Server is listening at port number 3000...");
})
