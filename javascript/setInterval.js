// In JavaScript, the setInterval function is used to repeatedly execute a given function or code block at a fixed time interval. It's a way to introduce periodic or repeated behavior in your code.

function logTime() {
  console.log("Current time:", new Date());
}

// Execute the logTime function every 2 seconds (2000 milliseconds)
const intervalId = setInterval(logTime, 2000);

// Clear the interval after 10 seconds (10000 milliseconds)
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 10000);
