const user = {
  username: "nawaz",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
console.log(this);

// what is this in javascript?
// this is a keyword in javascript which refers to the object that is executing the current function.
// this is not a static value, it depends on how the function is called.

function hello() {
  let username = "nawaz";
  console.log(this.username);
}

hello();

// In the code you provided, the usage of this inside the hello function is not referring to the username variable declared within the function. Instead, it's trying to access a property called username on the this object, which may not be defined in the context of your code.

// this in arrow function
// arrow function does not have their own this.
// the value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.

function doSomething() {
  console.log(this);
}

doSomething();
