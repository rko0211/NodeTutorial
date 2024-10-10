// Create a new promise that makes an API call
let promise = new Promise((resolve, reject) => {   // By default first parameter is resolve and second one is reject
  // Make an API call using fetch
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        // If response is not ok, reject the promise
        reject('Failed to fetch data from the API');
      }
      // Convert the response to JSON format
      return response.json();
    })
    .then(data => {
      // If fetch was successful, resolve the promise with the data
      resolve(data);
    })
    .catch(error => {
      // Catch any network errors and reject the promise
      reject(error.message);
    });

  console.log("Hello"); // Synchronous log statement
});

// Handle the resolved or rejected promise
promise
  .then(data => {
    console.log("I am Then part", data); // Executed if promise is resolved
  })
  .catch(error => {
    console.log("I am Catch part", error); // Executed if promise is rejected
  })
  .finally(() => {
    console.log("I will always be executed"); // Executed regardless of promise outcome
  });
