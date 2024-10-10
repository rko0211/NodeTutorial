const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Wellcome to our Home Page");
  }
  if (req.url === "/about") {
    // This code block whole resources hence when some one jump on about page it will take take time and othe pages are also impacted due to this. Thats why we use Asynchronous method 
    for (let i = 0; i < 1000000; i++) {
      for (let j = 0; j < 1000000; j++) {
        console.log("Hello World");
      }
    }
    res.end("About Page");
  }
  if (req.url === "/contact") {
    res.end("Contact Page");
  }
});
server.listen(5000, () => {
  console.log("Server is listening....");
})