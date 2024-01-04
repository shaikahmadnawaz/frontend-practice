function promiseDemo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Hello, World!";
      resolve(data);
    }, 2000);
  });
}

promiseDemo()
  .then((result) => {
    console.log("Success:", result);
    return result.toUpperCase();
  })
  .then((uppercaseResult) => {
    console.log("Uppercase Result:", uppercaseResult);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
