//ES5 - released in 2009 and works on ecmascript base standards also called plain javascript, vanila javascript
//ES6 - released in 2015 and support ecmascript 6 standards to give us advance features closer to class based progm lang

//ES5 - var : functional scope hoisted variable
//ES6 - let and const : block scoped variables or lexical variables

//console.log(my_let); //Cannot access 'my_let' before initialization; Hoisting is not present in let and const
//in Vanilla Javascript has scope based only one variable and ES6 has included let and const to avoid scoping issues

//1. let and const - can be accessed only in lexicals, {}
{
  // var myVal = "Test Var Scope"
  // let myLet = "Test Let Scope"
  // const myConst = "Test Const Scope"
  // console.log(myLet)
  // console.log(myConst)
}

//console.log(myVal)
// console.log(myLet)
// console.log(myConst)

//2. declarations - let can be declared and assigned value later but re-declaration is not allowed
  var myVal; //= "Test Var Scope"
  myVal = "Test Var Scope"
  console.log(myVal)
  let myLet;// = "Test Let Scope"
  myLet = "Test Let Scope"
  console.log(myLet)

  // let myLet = "Test Let Re- declare"
  // console.log(myLet)
  
  // Redeclaration and re-assignment is not allowed, also we need to do assignment as soon as we declare

  //const myConst;// = "Test Const Scope"
  //console.log(myLet)
  //console.log(myConst)

  const User = {
      Name : "Gauri",
      Address : "Wall Streets "
  }

  //User = {} //assigning a new value is not allowed

  User.Address = "New York Street" // we are able to update the reference of object

  //console.log(User)

//3. Hoisting doesn't works in let and const

//console.log(newLet)

let newLet = "My Let Hoisting"

//4. Issue with scope
// var i = undefined;
// for (i = 1; i < 5; i++) {

//     setTimeout(function() {
//         console.log(`Value of i ${i}`)
//     }, 2000);    

// }
// console.log(i)

// //var i = undefined;

// for (var i = 1; i < 5; i++) {

//     (function IIFEFunc(j) { //when we execute the function this gets evaluated by its value
//         setTimeout(function() {
//             console.log(`Value of i ${j}`)
//         }, 2000)
//     })(i)

// }
// console.log(i)

for (let k = 1; k < 5; k++) {
  setTimeout(function() {
      console.log(`Value 
      of 
      i 
      ${k}
      `)
  }, 2000);    
}

//console.log(k)


var newVal = "Test Me"
let newVal = 25000

//  console.log(newVal)

// 4. Issue with Scope

// issue with var --> var is a functional scope variable --> just keeps the reference of it -- latest value? 
for (var i=0; i<5; i++) {

  setTimeout(function() {
    console.log(`value of i: ${i}`); // value of i: 5 --> 5 times
  }, 2000)

}

console.log(i);

// var i = undefined;
for (i=0; i<5; i++) {

  setTimeout(function() {
    console.log(`test2: value of i: ${i}`); // value of i: 5 --> 5 times
  }, 2000)

}

console.log(`test2: ${i}`);


// function IIFE

var i = undefined;
for (i=1; i<5; i++) {
  (function IIFE(j) {
      setTimeout(function() {
        console.log(`IIFE: value of i: ${i}`)
      },2000)
  })(i)
}
console.log(`IIFE: ${i}`);

// SOLUTION
for (let k=1; k<5; k++) {
  setTimeout(function() {
    console.log(`let: value of k: ${k}`)
  },2000)
}
// console.log(`let variable: ${k}`); // not defined

var newVal = "test";
let newVal = "test-let";
console.log(newVal); // already been declared