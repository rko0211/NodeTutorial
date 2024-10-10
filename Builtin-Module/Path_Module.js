const path = require('path');
console.log(path.sep);

// Just kind of relative path
const filePath = path.join('/Content', 'subfolder', 'test.txt'); // Join every parameter and give "normalized" path
console.log(filePath);

const base = path.basename(filePath);

console.log(base);

// __dirname always points to the current directory(not the current file) in which the current/working file is present 

console.log(__dirname); // O/P -> /home/prakash/Desktop/NodeTutorial/Builtin-Module


const completePath = path.join(__dirname, 'Content', 'subfolder', 'test.txt');
console.log(completePath);

const absolute = path.resolve(__dirname, 'Content', 'subfolder', 'test.txt');
console.log(absolute);

