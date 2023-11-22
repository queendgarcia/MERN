// read user from module.js
// by doing import using require function

var {User, aConstant} = require("./module");

// or in es6 format
// import User from '.module';

console.log(User)

User.address = "UK"

console.log(User.getUserInfo());

console.log(aConstant);
console.log(globalThis.User);

// Put the student closure in a modulel and export the same and print in another file