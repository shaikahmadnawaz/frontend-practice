const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "user", email: "user@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}

getAllUsers();

fetch("https://api.github.com/users/shaikahmadnawaz")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.

// Promise.all is a powerful method in JavaScript that takes an array of promises as input and returns a new promise. This new promise resolves when all the input promises have resolved or rejects when at least one of the input promises is rejected.

// The basic idea behind Promise.all is to wait for multiple asynchronous operations to complete concurrently and gather their results. This is especially useful when you have several independent asynchronous tasks that need to be completed before you can proceed with the next steps in your program.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // Expected output: Array [3, 42, "foo"]

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved"), 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 rejected"), 800);
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved"]
  })
  .catch((error) => {
    console.log(error); // This won't be executed in this example
  });

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // This won't be executed in this example
  })
  .catch((error) => {
    console.log(error); // "Promise 3 rejected"
  });
