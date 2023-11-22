// Basics of JavaScript

// Compiled + Interpreted ==> (--Hoisting--)

// partially-compiled --> hoisting
console.log(myValue);
// knows that there is a variable but value is declared not until after this line
var myValue = "A";

// Case-Sensitive

var myName = "A";
var MyName = "B";

console.log(myName);
console.log(MyName);

// note: semicolon (;) is optional

// single-line comment --> //
// multi-line comment --> /* Test */


// Declaring Identifiers
// string, alphanumeric
// cannot start with number

var cloud9 = "cloud nine"; // allowed
// var 9cloud // not allowed

// $ and _ can be used as special characters

var _$session = "variable declaration";
var _ = "cloud nine";

console.log(_);

// JavaScript is untyped language -- assign any data type an identifier

var numSessions = true; 