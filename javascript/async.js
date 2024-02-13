// JavaScript is synchronous.
// JavaScript is single threaded.
// execute one line of code at a time.

/*
JavaScript Runtime Environment:
The JavaScript runtime environment is the environment in which your JavaScript code runs. This environment includes various components that work together to execute your code efficiently and handle asynchronous operations.

Call Stack:
The call stack is a fundamental concept in the JavaScript runtime. It's a data structure that keeps track of the function calls being executed. Whenever a function is called, a new frame is pushed onto the call stack to represent that function's execution context. When a function completes its execution, its frame is popped off the stack, and the control goes back to the calling function. This is how JavaScript maintains the order of execution for synchronous code.

Example of the call stack:

function foo() {
  console.log("foo");
  bar();
}

function bar() {
  console.log("bar");
}

foo();
Call stack steps:

foo() is called, pushing its frame onto the stack.

Inside foo(), console.log("foo") is executed and removed from the stack.

bar() is called within foo(), pushing its frame onto the stack.

Inside bar(), console.log("bar") is executed and removed from the stack.

bar() completes, and its frame is popped off the stack.

foo() completes, and its frame is popped off the stack.

Web API:
Web APIs are provided by the browser or the environment in which JavaScript is running. They allow you to perform various asynchronous operations, like making network requests (XMLHttpRequest, fetch), setting timers (setTimeout, setInterval), interacting with the DOM, and more. These operations are performed outside the JavaScript engine, in a separate environment provided by the browser.

Task Queue (Callback Queue):
When asynchronous operations are completed in the Web API environment, the corresponding callback functions (or events) are not immediately executed. Instead, they are placed in a queue called the task queue (or callback queue). The event loop's job is to continuously check the call stack and task queue, and if the call stack is empty, move tasks from the queue to the stack for execution.

MicroTask Queue:
Promises are executed in this microtask queue. They are executed before the next task is executed. If the task queue is empty and there are pending microtasks, the event loop will execute all of the pending microtasks before moving on to the next task. Micro task queues has high priority than task queues.

Event Loop:
The event loop is a critical component of the JavaScript runtime environment. Its primary job is to continuously check the call stack and task queue. If the call stack is empty, it picks up tasks from the task queue and pushes them onto the call stack for execution. This enables asynchronous code to be executed after synchronous code has completed.

The sequence of events is as follows:

Synchronous code is executed immediately and added to the call stack.
Asynchronous operations are initiated and handed off to the Web API environment.
Once the Web API operations are completed, their corresponding callbacks are placed in the task queue.
The event loop continuously checks the call stack. If it's empty, it picks up tasks from the task queue and pushes them onto the call stack for execution.
/* This combination of the call stack, Web API, task queue, and event loop allows JavaScript to handle both synchronous and asynchronous operations effectively, maintaining a responsive and non-blocking execution environment. */
