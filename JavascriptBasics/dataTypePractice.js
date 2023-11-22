// exercise: understand and give example of each data type and also try doing dynamic typing and accessing before declaration

// 1) String 

var value1 = "This is a string"
console.log(value1);
console.log(typeof value1);

// 2) Number

value1 = 7;
console.log(value1);
console.log(typeof value1);

// 3) Boolean
value1 = true;

console.log(value1);
console.log(typeof value1);


// 4) Object

var carObj = {
  name: "Car 1",
  brand: "Ford",
  make: "Ford Focus",
}

console.log(carObj);
console.log(typeof carObj);


// 5) Undefined

value1 = undefined;
console.log(value1);
console.log(typeof value1);

// 6) Null

value1 = null;
console.log(value1);
console.log(typeof value1);

// Symbol
var sym1 = Symbol("This is a Symbol");
console.log(sym1);
console.log(typeof sym1);

// Dynammic Type Casting

// firstly declare a string, then change to another data type - in this case, to a number

var value2 = "First: String";

console.log(value2);
console.log(typeof value2);

// changed datatype
console.log(value2);
console.log(typeof value2);


// Accessing Before Declaration

console.log(value3);
console.log(typeof value3);

var value3 = "Accessing before value3 declaration"

// comment out value3, it will be an error