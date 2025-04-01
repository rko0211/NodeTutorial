const express = require('express');
const app = express();

// Middleware

// By default express add this parameter
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("Testing");  // terminate the whole response cycle
  next();  // return controll to the position from where it is called
}
app.get('/', logger, (req, res) => {
  res.send("Home");
});

app.listen(3000, console.log(`Server is listening on port 3000....`));

