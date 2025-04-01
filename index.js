const fs = require("fs");
const http = require("http");

const myServer = http.createServer((req, res) => {
  // Extract IP address
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Extract additional headers
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];
  const referer = req.headers['referer'] || 'No Referer';

  // Log details
  const log = `${Date.now()}, IP: ${ipAddress}, URL: ${req.url}, User-Agent: ${userAgent}, Language: ${acceptLanguage}, Referer: ${referer}\n`;

  fs.appendFile('log.txt', log, (err) => {
    if (err) console.error("Failed to write to log file:", err);

    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.end("404 Page Not Found");
        break;
    }
  });
});

myServer.listen(5000, () => {
  console.log("My server is listening on port 5000....");
});
