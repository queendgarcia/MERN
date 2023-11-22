//Event loop system is there to help JS for non-blocking calls -- - LibUV Library

// Event Loop handles external events and converts them into callback invocations
// A loop that picks events from event queue and pushes their callbacks to the call stack
// Event loop is not part of V8 Engine, it comes to LibUV. It is present in association with anotehr set of APIs like setTimeout or XHR

// Registered Callback APIs 
// setTimeout
// setInterval
// XMLHttpRequest, etc. 

// Creating multiple callbacks using registered API setTimeout 

// NON-BLOCKING SYSTEM
console.log("Non-Blocking Calls Start"); // 1
setTimeout(function(){
  console.log("First Callback - Started") // 3

  setTimeout(function() {
    console.log("Fourth Callback")
  }, 0) // 4
  // must be equal or more than the outside timeout

// }, 1000); 
}, 5000); 

setTimeout(function(){
  console.log("Second Callback - Started") // 5
// }, 2000); 
}, 5000); 

setTimeout(function(){
  console.log("Third Callback - Started") //6
// }, 3000); 
}, 5000); 

console.log("Non-Blocking Calls End"); // 2

// if all have same time interval in setTimeout --> first, second, third callbacks would be printed simultaneously then proceed with fourth

// OUTPUT => all have 5s 
// Non-Blocking Calls Start
// Non-Blocking Calls End
// First Callback - Started
// Second Callback - Started
// Third Callback - Started
// Fourth Callback

// EVENT LOOP -> check diagram
