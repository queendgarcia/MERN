//create two files one as export another as import and import everything as * 

// import file

import * as constants from "./export_import_2.js";

console.log(constants);
console.log(constants.country);
console.log("----using for in loop----");

for (const key in constants) {
  if (Object.hasOwnProperty.call(constants, key)) {
    const element = constants[key]; 
    console.log(element)
  }
} 

