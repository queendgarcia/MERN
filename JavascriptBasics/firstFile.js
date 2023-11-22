console.log("This is the first execution from node.js");

console.log(myName); // undefined
console.log(add(9,9)); // 18

// functions are allocated already so it can be used before/after its declaration
function add(a,b) {
  return a+b
}

console.log(add(5,6));

var myName = "Some values";