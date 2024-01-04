// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Outputs 10
