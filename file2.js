
const names = require('./file1.js');   // default require, require is same as importing module
const show = require('./file3.js');
const { john, peter } = require('./file1');   // Named require(Name should match with actual object keys);

console.log(names);

console.log(names.john + " " + names.peter);

console.log(john + "-> " + peter);

show("GATE 2025");