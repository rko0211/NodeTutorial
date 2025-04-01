const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));
// Serve static files (CSS, JS, Images) from 'public' under '/static' route
app.use('/static', express.static(path.join(__dirname, 'public')));


let todos = [];

// Route to serve index.html
app.get('/', (req, res) => {
  // console.log(res.header);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Route to send todos to the client-side
app.get('/api/todos', (req, res) => {

  res.json(todos);  // Send todos array as JSON to the client
});
app.get('/api/items', (req, res) => {
  const filePath = path.join(__dirname, 'CRUD', 'data.txt');
  const data = fs.readFileSync(filePath, 'utf8');

  res.json(data); // converts data to json formate it tells that content-type of the response body is in json formate

});


// Route to handle form submission
app.post('/submit', (req, res) => {
  // console.log(res);
  const inputItem = req.body.inputItem;  // Get the form data from the request
  todos.push(inputItem);
  console.log(todos);
  // Write the form data to a file
  const filePath = path.join(__dirname, 'CRUD', 'data.txt');


  // Append new data to the file (or create if it doesn't exist)
  fs.appendFileSync(filePath, `Task: ${inputItem}\n`, 'utf8');

  // Send a response by the server back to the client
  res.send('Task received and stored successfully.');
});

// Ensure the 'CRUD' folder exists
if (!fs.existsSync(path.join(__dirname, 'CRUD'))) {
  fs.mkdirSync(path.join(__dirname, 'CRUD'));
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});

module.exports = { todos };