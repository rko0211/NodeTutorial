const { readFile, writeFile } = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(writeFile);  //If we use util then we don't need to use wrapper function like getText, sendText
const readFilePromise = util.promisify(readFile);
const getText = (path) => {
  return new Promise((resolve, reject) => {
    // readFile is an asynchronous method
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject("Please Give Correct File Path");
      }
      else {
        resolve(data);
      }
    })
  })
}
// const sendText = (path, text) => {
//   new Promise((resolve, reject) => {
//     writeFile(path, text, (error) => {
//       if (error) {
//         reject(error)
//       }
//       else {
//         resolve('Append completed.');
//       }
//     });
//   })
// }
const getData = async () => {
  try {
    const first = await readFilePromise('./resultSync.txt', 'utf8');
    const second = await getText('./resultAsync.txt');
    await writeFilePromise('./AsyncWriteFile.txt', `AWESOME NICE -> ${first}, ${second}`);
    console.log(first, second);

  }
  catch (err) {
    console.log(err);
  }
}
getData();