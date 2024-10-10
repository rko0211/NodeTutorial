// Define an async function to handle the API call
async function fetchData() {
  try {

    // Make an API call using fetch and wait here for the response
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    console.log("Hello"); // Synchronous log statement

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      // If not, throw an error to be caught in the catch block
      console.log("Hello world");
      throw new Error('Failed to fetch data from the API');
    }

    // Parse the response as JSON and wait for it
    const data = await response.json();

    // Log the result if the fetch and parsing were successful
    console.log("I am Then part", data);


  } catch (error) {
    // Catch any errors that occurred during the fetch or JSON parsing
    console.log("I am Catch part", error.message);
  } finally {
    // This block always runs, regardless of success or failure
    console.log("I will always be executed");
  }
}

// Call the async function
fetchData();
