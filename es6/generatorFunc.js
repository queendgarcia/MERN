// A generator function is a function that can be yeilded as many times as possible upon single invocation

//Generator Functions: Allows us to get multiple yields (or kind of returns) for the indefinite number of times
// without creating and invocation of the function

// function PrintCovidInfectedData(who_id) {
//     let data = fetchCovidInfectedData(who_id)

//     return data;
// }
// PrintCovidInfectedData(id) //US, IN
// PrintCovidInfectedData(id) // executes once


function *PrintCovidInfectedData(who_id) {
  //let data = fetchCovidInfectedData(who_id)   
  data = who_id

  yield data + 50// execution is still on and function is live

  yield data + 100

  yield data + 150

  return data + 200//execution is done and no further data will be returned
}

let generatorPointer = PrintCovidInfectedData(10)

console.log(generatorPointer.next())
console.log(generatorPointer.next())
console.log(generatorPointer.next())
console.log(generatorPointer.next())
console.log(generatorPointer.next())



//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){

  yield console.log("Addition : " + (num1+num2));
  yield console.log("Subtraction : " + (num1-num2));
  yield console.log("Multiply : " + (num1*num2));
  yield console.log("Division : " + (num1/num2));

  return "Done";
}
// let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())