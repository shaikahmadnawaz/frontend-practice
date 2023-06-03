// a closure is a function that remembers and can access variables from its parent scope, even after the parent function has finished executing.

function outerFunction() {
  var outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: Hello

// Callbacks and Event Handling:
// Closures are commonly used for managing callbacks and event handling. When a function with a callback is executed, the callback retains access to variables in its parent scope, even after the parent function has completed execution.

function onClick(elementId) {
  var element = document.getElementById(elementId);

  element.addEventListener("click", function () {
    console.log("Element with ID", elementId, "was clicked.");
  });
}

onClick("myButton");
