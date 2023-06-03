function outerFunction() {
  var outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: Hello
