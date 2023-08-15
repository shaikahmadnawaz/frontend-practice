// In JavaScript, the setTimeout function is used to schedule the execution of a function or a code block after a specified delay (in milliseconds). It's a way to introduce asynchronous behavior into your code, allowing certain tasks to be executed after a certain amount of time has passed.

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

/*

```javascript
const sayDate = function(str){
    console.log(str, Date.now());
}

setTimeout(sayDate, 2000, "hi");
```

In this example, you're using the `setTimeout` function to schedule the execution of the `sayDate` function after a delay of 2000 milliseconds (2 seconds). Here's what happens step by step:

1. The `sayDate` function is defined. It takes one argument `str` and logs a message along with the current timestamp using `Date.now()`.

2. `setTimeout(sayDate, 2000, "hi");` is executed:
   - The `sayDate` function reference is passed as the first argument to `setTimeout`.
   - The number `2000` is passed as the second argument, indicating the delay in milliseconds.
   - The string `"hi"` is passed as the third argument. This will be used as the argument when the `sayDate` function is called.

3. After the delay of 2000 milliseconds, the `sayDate` function is taken from the task queue and executed with the provided argument `"hi"`.
   
The output would be something like:

```
hi 1660718796675
```

Here's what happens if you execute the function immediately by mistake:

```javascript
const sayDate = function(str){
    console.log(str, Date.now());
}

setTimeout(sayDate(), 2000, "hi"); // Incorrect usage
```

In this incorrect usage, the `sayDate` function is executed immediately due to the parentheses `()`. Since the function doesn't explicitly return anything, it's effectively equivalent to calling `setTimeout(undefined, 2000, "hi");`. This would likely not produce the desired behavior of logging the message after a 2-second delay.

To summarize, the correct usage of `setTimeout` involves passing the function reference without parentheses to ensure that it's executed after the specified delay. The JavaScript runtime handles the execution timing for you.*/

// clearTimeout

function sayHello() {
  console.log("Hello!");
}

// Set a timeout to execute sayHello after 3 seconds
const timeoutId = setTimeout(sayHello, 3000);

// Cancel the timeout before it can execute
clearTimeout(timeoutId);

console.log("Timeout canceled");
