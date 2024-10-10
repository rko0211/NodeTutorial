const amount = 9
if (amount < 10) {
  console.log("Small Number");
}
else {
  console.log("Large number");
}

console.log(`Hello world this is my first Node App !!!`);

console.log(__dirname);
// Asynchronous Execution: In JavaScript, asynchronous functions like setInterval do not block the execution of the code that comes after them. This means that after a setInterval function is called, the control moves to the next line immediately, and the rest of the code is executed while the setInterval continues to run in the background at its specified intervals.

// Asynchronously this code will execute controll will not stop in setInterval function rather it will print 
// __filename first 


// Synchronous Execution: In a synchronous execution model, code is executed line by line, one after another, in the order it is written.The control will not move to the next line until the current line has completed its execution.

// Synchronous execution means that code runs in sequence, one line at a time, and the control moves to the next line only after the current line has finished executing.

setInterval(() => {
  console.log("Hello World");
}, 1000)

console.log(__filename);