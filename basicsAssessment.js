// ASSESSMENT

var {User} = require("./module");

//Q1. Create a file with name basics and show all the features that you know about javascript
// Javascript is an untyped language, there is no need to explicitly state a datatype to an identifier. It automatically detect the value of the variable with its data type. 
// Javascript also works with functions as it is a functional programming language as comparison with how Java works with objects
// Javascript also works with overriding and overwriting - instead of overloading


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

console.log("----- QUESTION 2 -----");

var value1 = "Robert";  console.log(value1, typeof value1);
var value1 = .0266; console.log(value1, typeof value1);
var value1 = false; console.log(value1, typeof value1);
var value1 = { myname: "Test Me"}; console.log(value1, typeof value1);
var value1 = 25166665; console.log(value1, typeof value1);
var value1 = undefined; console.log(value1, typeof value1);
var value1 = true; console.log(value1, typeof value1);
var value1 = "Robert Jr."; console.log(value1, typeof value1);
var value1 = null; console.log(value1, typeof value1);
var value1 = {};  console.log(value1, typeof value1);
var value1 = -32767; console.log(value1, typeof value1);


//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showUserInfo(firstName, lastName, age) {
  console.log("User Info: " + firstName, lastName, age);
}

console.log("----- QUESTION 3 -----");
showUserInfo("John", "Doe", 20);

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doAddition(a,b,c) {
  console.log(a,b,c)
  return a+b+c;
}

console.log("----- QUESTION 4 -----");
console.log(doAddition(2,3,4)); // output: 9
// Since the number of parameters are satisfied and the type of all the values are same, the addition operation is processed as expected
console.log(doAddition(2));  // output: NaN
// Since only 1 value is passed in the function, JS will treat b and c as undefined. Hence, 2 + undefined + undefined would be NaN
console.log(doAddition(2.3,4)); // output: NaN
// Similarly, since only 2 valus are passed here, JS will treat c as undefined. Hence, 2.3 + 4 + undefined would be NaN
console.log(doAddition("first", 2,"three")); // output: first2three
// Since the values passed to the function contain string values -- JS will process it as such and will perform concatenation because of (+) operator;

//Q5. Print the topics you have done so far exporting it from one file and printing in another

console.log("----- QUESTION 5 -----");
// var {User} = require("./module"); 
// declared at the top for it to be used here
console.log(User.getUserInfo());

//Q6. Give me an example of your choice on closure, objects, prototype, each.
console.log("----- QUESTION 6 -----");

var Student = { name: "Queen", country: "US"}
var University = {country: "US", University: "ABC University"}

// Use of Object.assign
var StudentDetails = {}
StudentDetails = Object.assign(StudentDetails, Student, University);
console.log(StudentDetails);
// this will copy the details for both objects --  common and uncommon

//Q7. Create an object without prototype chain or i do not want it to be inherited further

console.log("----- QUESTION 7 -----");

var User = {
  name: "BBB",
  age: 22,
  getUserDetails: function() {
    return {
      name: this.name,
      age: this.age
    }
  }
}

var User1 = Object.create(User);
User1.Program = "ECE";

console.log(User1.Program);
console.log(User1.getUserDetails());

//Q8. what will the following code output? why?

console.log("----- QUESTION 8 -----");

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}

// the output for the for loop above prints the line 'Index: 4, element: undefined' for 4 times after waiting 3 seconds. After the delay of 3 seconds to print, the timeout function will run after the for loop execution; then the undefined value is due to the arr[4] = undefined as array index starts at 0