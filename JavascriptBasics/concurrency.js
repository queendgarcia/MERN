// CONCURRENCY
// -- basically, doing multiple tasks simultaneously

// analogy: restaurants

// example 1 --> Blocking or Non-Concurrent Way of Execution (Single-Threaded Execution)

// takes requests one at a time (100 requests)
// customer1 - 5 mins, customer2 - 10 mins, customer3 - 15 mins

// Order1(c1) <==> waiter <==> Kitchen(wait 5 mins)
// Order2(c2) <==> waiter <==> Kitchen(wait 10 mins)
// Order3(c3) <==> waiter <==> Kitchen(wait 15 mins)

// total time to deliver order
// 5+10+15 ==> 30mins

// customers -- end users
// token -- waiter
// kitchen -- processor

// Example 2 --> Non-Blocking or Concurrent Way of Execution (Single (JavaScript)/ Multi-Threaded Execution)

// can take many requests at a time (100 requests)
// customer1 - 5 mins, customer2 - 10 mins, customer3 - 15 mins
// Order1(c1) <==> waiter <==> Kitchen -- doesn't wait [TOKEN] (5 mins)
// Order2(c2) <==> waiter <==> Kitchen -- doesn't wait [TOKEN] (10mins)
// Order3(c3) <==> waiter <==> Kitchen -- doesn't wait [TOKEN] (15 mins)

// after 15 mins ==> Kitchen ==> Waiter ==> (Order1 + Order2 + Order3) 
// maximum time: 15mins

//Customer4 <==> Waiter ==> doesn't wait [TOKEN] (15 mins)
//Customer5 <==> Waiter ==> doesn't wait [TOKEN] (15 mins)

// ASYNCHRONOUS CALLS are non-blocking 
// it implements the multi-threading approach

// XMLHttpRequest
// var jqXHR = new XMLHttpRequest();
// contain methods that can be used while calling through the server

// Callback 
//  the system present in JS makes is work multi-threaded like system without using multiple threads

//Event loop system is there to help JS for non-blocking calls -- - LibUV Library

// Registered Callback APIs 
// 1. SetTimeout
// 2. SetInterval
// 3. XMLHttpRequest










