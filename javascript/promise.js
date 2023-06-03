function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Hello, World!";
      // If the operation is successful, resolve the promise
      resolve(data);
      // If an error occurs, reject the promise
      // reject(new Error('Failed to fetch data.'));
    }, 2000);
  });
}

fetchData()
  .then((result) => {
    console.log("Success:", result);
    // Return a new promise for chaining
    return result.toUpperCase();
  })
  .then((uppercaseResult) => {
    console.log("Uppercase Result:", uppercaseResult);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
