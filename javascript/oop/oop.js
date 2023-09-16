// what is oop in javascript?
// oop stands for object oriented programming.
// oop is a programming paradigm based on the concept of objects.
// objects may contain data in the form of fields, also known as attributes; and code, in the form of procedures, also known as methods.

const user = {
  username: "nawaz",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// constructor function
// constructor function is a function that is used for creating objects.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("nawaz", 12, true);
const userTwo = new User("ahmad", 11, false);
// console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);
