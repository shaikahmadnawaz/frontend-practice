console.log("Start");

// Asynchronous task
setTimeout(function () {
  console.log("Async task 1");
}, 2000);

// Synchronous task
console.log("Sync task");

// Another asynchronous task
setTimeout(function () {
  console.log("Async task 2");
}, 1000);

console.log("End");
