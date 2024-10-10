// Write Files

const fs = require('fs');

fs.writeFileSync('./resultSync.txt', 'Hello World');

setTimeout(() => {
  fs.writeFileSync('./resultSync.txt', ' I am learning Node JS', { flag: 'a' });
}, 0)


// Read Files

const { readFileSync } = require('fs');  // Destructure the object at initial stage 
const data = readFileSync('./resultSync.txt', 'utf8');
console.log(data)