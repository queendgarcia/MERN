//var - gets hoisted with default value (undefined)
//functions get hoisted with their definition

console.log(print)
// console.log(print(20,21)) // TypeError: print is not a function

console.log(var1) //undefined
console.log(name) //function with definition (knows that name is a function as it is declared)
console.log(name()); // prints the log inside the function, but undefined since it returns nothing

var var1 = 1
var var2 = 2    

function name(params) {
    console.log("This is hoisted function")
    // return "hello";
}


var print = function (a, b) {
    return a + b
}

console.log(print(20,21)) // TypeError: print is not a function
// will work as print function expression is already declared

var var3 = 3
var var4 = 4
var var1 = 5

// note: Hoisting makes all these possible for function declarations. But, it's also worth noting that hoisting does not occur on function expressions.