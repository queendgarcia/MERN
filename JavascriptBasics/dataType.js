// DATA TYPES
// - are storage type to store various types of data like - int, char, string, boolean, etc.

// In JavaScript -- there are 6 datatypes
// String, number, boolean, undefined, null, object

// In es6, above we can have symbol as data

// in java
// String myvalue = "This is my first value";

// 1) String
var myValue = "This is my first string";

console.log(myValue);
console.log(typeof myValue);

// if it is a compile language, it cannot be redeclared
// but in javascript, it is possible with var;
// var myValue = "Redeclaring a variable";

// Dynamic Type Casting- changing datatypes of the variable is also possible

// 2. Number
var myValue = 2500; // number 
var myValue = 2500.0023; // number

console.log(myValue);
console.log(typeof myValue);

// 3. Boolean
myValue = true;
console.log(myValue);
console.log(typeof myValue);

// 4. Object

var prsnObject = {
  name: "Name1",
  friend: "Name2"
}

myValue = prsnObject;

console.log(myValue);
console.log(typeof myValue); // object

// myValue = {}
console.log(myValue); // empty obj
console.log(typeof myValue); // object

// 5. Undefined
myValue = undefined;
console.log(myValue); // undefined
console.log(typeof myValue); // undefined

// before declaration

// console.log(myValue1); // undefined
console.log("before declaration");

// if uncommented, myValue; result is error
// var myValue1 = "test";

// 6. Null
myValue = null;

console.log(myValue); // valid value in js
console.log(typeof myValue); // object
// core dataype -- all starting point of any program is in object type

// Symbol data type is present from ES6 and can be used in own libraries

var mySymbol = Symbol("Symbol Data Type");

console.log(mySymbol); // symbol(symbol data type)
console.log(typeof mySymbol); // symbol

// exercise: understand and give example of each data type and also try doing dynamic typing and accessing before declaration
