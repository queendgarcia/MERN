// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

console.log("--------Q1 - a ---------");
// a. Get heroes who are not evils
let notEvil = heroes.filter(hero => hero.isEvil === false);
console.log(notEvil);

// b. Print Unique family names
console.log("--------Q1 - b ---------");
let uniqueFamilyNames = heroes.reduce( (uniqueNames, hero) => {
  if (uniqueNames.includes(hero.family) === false)  uniqueNames.push(hero.family);
  return uniqueNames;
}, []);
console.log(uniqueFamilyNames);

// c. Print Hero Names from given objects, and append sir in each of them before printing
console.log("--------Q1 - c ---------");

let renameHeroes = heroes.map(hero => hero.name = hero.name + " sir");
console.log(renameHeroes);

// d. Do we have any hero in Marvel Family who is not evil

console.log("--------Q1 - d ---------");

let marvelNotEvil = heroes.filter( hero => hero.family == "Marvel" && hero.isEvil == false);
console.log(marvelNotEvil);



//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc 

console.log("--------Q2---------");

let mapExample = new Map();

let ename = "A", age = 22, program = "ECE";

mapExample.set(ename, "A-B");
mapExample.set(program, "CE");
console.log(mapExample.get("A")); 
console.log(mapExample.has("ECE")); 
console.log(mapExample.entries());

let setExample = new Set([1,2,3,4,5]);
console.log(setExample.values());
console.log(setExample.add(6));
console.log(setExample.delete(2));
console.log(setExample.entries());

//3. Create a promise object that get resolved after two seconds and rejected after three. Also it returns five ES6 features on resolved

console.log("--------Q3---------");

let promiseObj = new Promise((resolve, reject)=>{

  setTimeout(() => {
      resolve({
          "message" : "resolve block",
          "code" : "success",
      })
  }, 2000);

  setTimeout(() => {
      reject({
        "message" : "reject block",
        "code" : "failed",
      })
  }, 3000);
})

console.log(promiseObj);

promiseObj.then((data, err) => { 
  let {message, code = "CDEF code-revised" } = data; // destructuring
  let numberCode = 1234; 
  let test = { message, numberCode }; // shorthand
  console.log(`Q3 resolved: this is the message: ${test.message} | with code ' ${code} ' with numberCode ${test.numberCode}`); // template literals
}).catch((err) =>console.log(err)) 

//4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice) also need to print students of the session using same example 

console.log("--------Q4---------");

let product = 1;
const multiplyNumbers = (...num) => {
  for (let i in num) {
    product = product * num[i];
  } 
  return product;
};

console.log(multiplyNumbers(1,2,3,4,5));

const printStudents = (...students) => {
  for (let i in students) {
   console.log(students[i])
  } 
};

printStudents("ANAME", "BNAME", "CNAME");


//5. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

//answer
let { userDetails: {last, contact = 9119119110} } = person;

console.log("--------Q5---------");
console.log(last);
console.log(contact);

//6. Give me an example of const data manipulation

const student = {
  name: "A",
  age: 24
}

student.name = "ABC";

console.log("--------Q6---------");
console.log(student.name);

//7. What is the difference between for-of and for-in show with examples
let subjects = {
  topic: "abc",
  tuition: 100,
  code: 1234,
}

console.log("--------Q7 for-in ---------");
for ( const key in subjects) {
  if (Object.hasOwnProperty.call(subjects, key)) {    
    const element = subjects[key]; 
    console.log(element);
  }
}

let numbers = [1,2,3,4,5];
console.log("--------Q7 for-of ---------");

for (const number of numbers) {
  console.log(number);
}

//8. Give me an example of bind and write its usage, comparison with arrow function

// commented out codes to run this file
console.log("--------Q8---------"); 
console.log("practice on web browser");

// // <button id="bindBtn">Test Button</button>
// var bindButton = document.getElementById("bindBtn");
// var objectDetails = { "name": "bind-sample", "test": "ABCD"}

// var clickBtn = function() {
//   alert(`This is a ${this.name} for ${this.test}`)
// }
// bindButton.addEventListener("click", clickBtn.bind(objectDetails), false);

// // clickBtnArrowFnc will not attach to the bind and will fire undefined in addEventListener
// var clickBtnArrowFnc = () => {
//   alert(`This is a ${this.name} for ${this.test}`) 
// }
// // bindButton.addEventListener("click", clickBtnArrowFnc.bind(objectDetails), false);



//9. Create an example showing usage of event loop in concurrent execution cycle

setTimeout(function(){
  console.log("--------Q9---------  Hello- after 1 second") 

  setTimeout(function() {
    console.log("Hello- after 2 seconds")
  }, 1000) 

}, 1000); 

setTimeout(function() {
  console.log("Hello - after 3 seconds")
}, 3000);

//10. create an example showing usage of short hand, default param and template literal.

console.log("--------Q10---------");
let defaultParamFnc = (a=0) => {
  console.log(a+2);
}

defaultParamFnc();

let value1 = 1;
let value2 = 2;
let value3 = 3;

let shortHandExample = { 
  value1,
  value2,
  value3
}

console.log(shortHandExample);

let templateLiteralExample = { first: "hello", second: 1000}

console.log(`from template literal example: ${templateLiteralExample.first} and ${templateLiteralExample.second}`);


