const obj = require('./file3.js');
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}
const name = "Prakash Mondal";


module.exports = { sayHi, name };



console.log(typeof (obj.items));

console.log(obj.items);
console.log(obj.items[2]);