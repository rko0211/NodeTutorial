const { readFileSync, writeFileSync } = require('fs');   // Method destructuring from 'fs' module
const path = require('path');

writeFileSync('/test.txt', 'Hello World');

// const readContent = readFileSync(__dirname, 'utf8');

