//Practice questions

// 1. Create a constructor Function with Name account and add properties like - AccType, Name, Balance, etc
//2. Create a method in it to return account details 

// Constructor function 

function nameAccount(acctype, name, balance) {
  this.acctype = acctype;
  this.name = name;
  this.balance = balance;

  this.getAccountDetails = function(params) {
    return `Account type: ${this.acctype}, Name: ${this.name}, Account Balance: ${this.balance}`
  }
}

var user1 = new nameAccount("Savings", "Queen", 1000);
console.log(user1.getAccountDetails());


//3. Create an IIFE and try to access it after execution

(function testIIFE(params) {
  console.log(params)
})("test params for IIFE");

// testIIFE("test IIFE after execution");
// Above command when run will get a reference error: testIFFE is not defined

//4. Create a function with name Add (accept two params) and
//  again create a function expression with name Add(three params), both should return the Sum of params

// Named function
function Add(a,b) {
  return a+b;
}

// Function Expression
var Add = function(a,b,c) {
  return a+b+c;
}

console.log(Add(1,7)); // output: NaN
console.log(Add(10,22,3)); // 35
// will execute the last declared function which takes 3 parameters


//5. Try executing both functions on top (i.e. before declaration of it and see results)

// executing both functions before declaration 
console.log('Before declaration: Add - ' + Add1(1,7)); // output: 8
console.log('Before declaration: Add (w/ 3 params) - ' + Add1(10,22,3)); // output: 32 
// will only execute the first named function declaration which only takes 2 parameters
// accessing function expression(Add1) here will result to error: as it is not a function yet

// Named function
function Add1(a,b) {
  console.log("check");
  return a+b;
}

// Function Expression
var Add1 = function(a,b,c) {
  return a+b+c;
}

// note: Hoisting makes all these possible for function declarations. But, it's also worth noting that hoisting does not occur on function expressions.