// CAllBACK FUNCTION
// When a function is passed as a parameter in any other function, it is called as callback function

// This function will remain in the entirety of other functions' context

functionComments = "Printing details: "

function printDetails(param1, param2) {
  console.log(functionComments, param1, param2)
}

function getDetails(userName, uAddress, callbackFunction) {
  callbackFunction(userName, uAddress);
}

getDetails("AA", "US", printDetails);

function accountDetails(accType, accBal, callbackFnc) {
  callbackFnc(accType, accBal);
}

// function reusability -- function passing as param
accountDetails("Credit", "$1000", printDetails);

// create a function with arithmetic calculation
// inside that pass, two params
// create 4 different functions - sum, substract, multiple, divide
// if we pass sum, it should do sum

function arithmeticOperation(type, a, b) {
  if (type === 'Addition') console.log(a + b)
  else if (type === 'Subtraction') console.log(a - b)
  else if (type === 'Multiplication') console.log(a * b)
  else if (type === 'Division') console.log(a/b)
  else console.log("Invalid arithmetic operation")
}

function addTwoNumbers( a, b, callbackFnc) {
  callbackFnc("Addition", a, b);
}

addTwoNumbers(10, 5, arithmeticOperation);

function subtractTwoNumbers( a, b, callbackFnc) {
  callbackFnc("Subtraction", a, b);
}

subtractTwoNumbers(10, 5, arithmeticOperation);

function multiplyTwoNumbers( a, b, callbackFnc) {
  callbackFnc("Multiplication", a, b);
}

multiplyTwoNumbers( 10, 5, arithmeticOperation);

function divideTwoNumbers( a, b, callbackFnc) {
  callbackFnc("Division", a, b);
}

divideTwoNumbers( 10, 5, arithmeticOperation);