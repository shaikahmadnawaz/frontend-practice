// Callbacks are a fundamental concept in JavaScript and are often used to handle asynchronous operations or events. A callback is a function that is passed as an argument to another function and is executed at a later time or when a certain event occurs.

function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = "Hello, World!";
    // Invoke the callback function with the data
    callback(null, data);
    // If an error occurs, invoke the callback with the error
    // callback(new Error('Failed to fetch data.'));
  }, 2000);
}

function handleData(error, result) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Success:", result);
  }
}

fetchData(handleData);
