// In JavaScript, a Promise is a built-in object that represents the eventual completion or failure of an asynchronous operation. It provides a cleaner and more structured way to work with asynchronous code, making it easier to handle complex asynchronous flows and avoid callback hell (also known as the "Pyramid of Doom").

// A Promise can be in one of three states:

// Pending: The initial state, representing that the promise is neither fulfilled nor rejected.
// Fulfilled: The state when the asynchronous operation has completed successfully, and the promise has a resolved value.
// Rejected: The state when the asynchronous operation has encountered an error or failed, and the promise has a rejected reason.
// Promises have methods like .then() and .catch() that allow you to specify what should happen once the promise is fulfilled or rejected. Additionally, Promises allow for chaining of asynchronous operations in a more readable and maintainable way.

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
