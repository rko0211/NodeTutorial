const { writeFile, readFile } = require('fs');
// Asynchronous method alwyas takes a call back function as a parameter
// First write to the file


writeFile('./resultAsync.txt', 'Hello World', (error) => {
  // As writeFile() does not pass any result data to its callback method so, we will not consider it as it is always undefined
  if (error) {
    console.log(error);
    return;
  }
  console.log('First write completed.');

  // Now append to the file
  writeFile('./resultAsync.txt', ' I am learning Express JS ', { flag: 'a' }, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log('Append completed.');
  });


  readFile('./resultAsync.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(res);
  })
});

// By default Node JS is a Asynchronous method 

