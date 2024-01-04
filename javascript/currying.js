// Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.

function add(a) {
  return function (b) {
    return a + b;
  };
}

console.log(add(3)(4));
