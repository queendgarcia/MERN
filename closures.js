// OOP FUNDAMENTALS

// 1. Inheritance -- Constructor function in es5 and classes in es6, prototype is the only way

// 2. Encapsulation -- Data hiding can be done through closures, with the help of access modifiers

// 3. Polymorphism -->
//  Overriding -- it supports functions as well as classes 
// Overloading -- it is not supported in JS

// 4. Abstraction -- not required in JS


// CLosures -- A phenomenon when we have two nested functions and the parent function returns child one, at the time of return

// Child function only return some required properties and other are kept private

function Closures(params) {
  // function properties
  var func = function() {}
    // return things that need to be accessed
  return func;
}


// Example

function Account(name, address, type) {
  var AccName = name;
  var Address = address;
  var AccType = type;
  var UserID = name;
  var AccBal = "$2500"; // public 
  var AccPwd = "asdfgh123!" // private

  var funcGetDetails = function(userID, pwd) {
    if (userID == name && pwd == AccPwd) {
      return {
        AccName: AccName,
        AccType, // just declare on and ES6 will create key value pair
        AccBal,
      }
    } else {
      return {
        Alert: "Wrong Password"
      }
    }

  }

  return funcGetDetails
}

var closureObj = Account("Garcia", "US", "Savings");

console.log(closureObj("Garcia", "asdfgh123!"));
console.log(closureObj("Garcia", "wrongPW"));

// try creating closure structure for student object, keeping their internal marks as private
