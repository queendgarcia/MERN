// Functions -- are first class member citizens in js, backbone of js
// JS is a functional programming language

// user -  class > getUserDetails - method/function

// keyword --> function

// Every function is pure function - it must have return statement 
// if not then js by default return undefined

// 1. Named Function
function myFunc() { // function definition
  return "Hello World";
}

console.log(myFunc());

// 2. Function expression

var FuncExps = function(a,b) {
  console.log(a+b);
}

FuncExps(); // this will get undefined if no parameters passed
// FuncExps(9,10);

// 3. Singleton Function or IIFE
//    -- immediately invocaable function expression

(function IIFE(params) {
  console.log(params)
})("Test");

// for 1 specific usage only

// IIFE("hello"); 
// will throw an error, can't be accessed second time

// 4. Constructor Function -- used as class

function funcConstructor(name,age,address){
  this.name = name;
  this.age = age;
  this.address = address;
  this.getUserDetails = function(params) {
    return this.name + this.age + this.address;
  }
}

// use it as a class 
var user = new funcConstructor("a", 17, "US");
console.log(user.getUserDetails());

// do practice each type by writing your own

// HOISTING 
// function hoisting -- needs complete definition
// variable hoisting -- gives undefined as it expects that it will get declared