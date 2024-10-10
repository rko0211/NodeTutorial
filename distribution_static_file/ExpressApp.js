const express = require('express');
const path = require('path');
const app = express();



// Middleware to serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'Navbar')));




// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Navbar', 'index.html'));
});

// About page route
app.get(['/about', '/about.html', '/about-us'], (req, res) => {
  res.sendFile(path.join(__dirname, 'Navbar', 'about.html'));
});



// Catch-all route for 404 (Error page)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'Navbar', '404.html'));
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
