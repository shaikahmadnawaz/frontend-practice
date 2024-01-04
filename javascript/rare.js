function newFunction() {
  var x = 1;
  console.log(x);
}
newFunction();

var x = 10;
console.log(x);

// This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a const object as this:

const greeting = {
  message: "say Hi",
  times: 4,
};
