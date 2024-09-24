# JavaScript Code Execution

Execution context is created in 2 phases:

1. **Creation Phase**: In this phase, the JavaScript engine creates the global object, the `this` object, the outer environment, and sets up memory space for variables and functions. This is also known as the hoisting phase.

2. **Execution Phase**: In this phase, the JavaScript engine assigns values to variables and executes the code line by line.

The JavaScript engine is single-threaded, meaning it can only execute one piece of code at a time. It is also synchronous, meaning it executes code in order and can only go to the next line of code after the current line has finished executing.

The JavaScript engine consists of two parts:

1. **Memory Heap**: This is where memory allocation happens. Objects are stored here.

2. **Call Stack**: This is where the execution context is stored. The thread of execution is stored here.

When a function is called, a new execution context is created and pushed onto the call stack. When the function finishes, the execution context is popped off the stack.

The thread of execution is the order in which the code is executed. It is the path that the JavaScript engine follows as it executes the code.

```javascript
function greet() {
  console.log("Hello, world!");
}

greet();
```

In the code snippet above, when the `greet` function is called, a new execution context is created and pushed onto the call stack. The code inside the function is executed, and then the execution context is popped off the stack.

This is how JavaScript code is executed in the browser. Understanding the execution context is crucial for understanding how JavaScript code runs and how variables and functions are stored and executed.

```javascript
var n = 10;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
```

There things are stored in the memory:
n: undefined
square: function
square2: undefined
square4: undefined

In code execution, the JavaScript engine will assign values to variables and execute the code line by line. The code snippet above demonstrates how variables and functions are stored in memory and how the JavaScript engine executes the code.

```javascript
var n = 10;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
```

In the code snippet above, the variable `n` is assigned the value `10`. The function `square` is defined, and when it is called with the argument `n`, a new execution context is created and pushed onto the call stack. The code inside the function is executed, and the result is stored in the variable `square2`. The function is then called again with the argument `4`, and the result is stored in the variable `square4`.

This is how JavaScript code is executed in the browser. Understanding how variables and functions are stored in memory and how the JavaScript engine executes the code is essential for writing efficient and effective JavaScript code.

Call Stack:

- The call stack is where the execution context is stored. It keeps track of the order in which functions are called and executed.
- When a function is called, a new execution context is created and pushed onto the call stack.
- When the function finishes, the execution context is popped off the stack.
- The call stack is a last-in, first-out (LIFO) data structure.
- The call stack is used to keep track of the order in which functions are called and executed.
- The call stack is a key part of how JavaScript code is executed in the browser.
- Understanding the call stack is crucial for understanding how JavaScript code runs and how functions are called and executed.
- The call stack is a fundamental part of how JavaScript code is executed in the browser.

Global Execution Context:

- The global execution context is the first execution context created when the JavaScript engine starts running.
- It is the outermost execution context and contains all the code that is not inside a function.
- The global execution context is created in two phases: the creation phase and the execution phase.
- In the creation phase, the JavaScript engine creates the global object, the `this` object, the outer environment, and sets up memory space for variables and functions.
- In the execution phase, the JavaScript engine assigns values to variables and executes the code line by line.
- The global execution context is where the JavaScript engine starts executing the code.
- Understanding the global execution context is crucial for understanding how JavaScript code runs and how variables and functions are stored and executed.

Call stack or Execution Context Stack or Program Stack or Control Stack or Machine Stack or Run-time Stack
