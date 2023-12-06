// export and import are keywords to send/fetch files data respectively

// named export
// constant.js

export let pie = 3.1414; // named export
export let mu = 0.1541; // we can have multiple named exports from a file
export let phi = 0.1541;
export let sigma = 0.1541;

export default user = { name: "Test", address: "US Address"}; 
// only 1 default is allowed from every file

// another file = constant2.js
// export let pie  = 3.14 // named export

// importdata.js
import {pie,mu} from "./constant/js"; // named import using {}
import user from "./constant.js";
// only 1 default import allowed
import {pie as pie2} from "./constant2.js"; // aliasing

import * as constants from "./constant.js"; // importing all named exports as constants

// can access the variables one by one through dot operator
// console.log(constants.phi);
// console.log(constants.sigma);



//create two files one as export another as import and import everything as * 

// from export_import2.js

