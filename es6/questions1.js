// 1. print firstname and sessionTopics, along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

console.log("-----------Q1-----------");

let StudentTest = {
  firstname : "Put your name",
  address : " ??",
  sessionTopics : {
      covered1 : "CoreJS",
      covered2 : "OOJS"
  }
}

let { firstname, lastName = "Garcia", sessionTopics: {covered1, covered2, covered3 ="ES6"}} = StudentTest;

console.log(firstname);
console.log(lastName);
console.log(covered1, covered2, covered3);



//2. create a funtion with name multiply which accepts three parameters, and return multiplication of all but if we dont pass any parameter it returns 0

console.log("-----------Q2-----------");

let multiplyNumbers = (x=0, y=0, z=0) => {
  return x*y*z;
}

console.log(multiplyNumbers(1,2,3));
console.log(multiplyNumbers());


// 3. create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

console.log("-----------Q3-----------");


console.log("--- for in loop ---") 

let arr1 = [1,2,3,4,5];
arr1.newKey = "newval";

for (const key in arr1) {
  if (Object.hasOwnProperty.call(arr1, key)) {
    console.log(arr1[key]);
  }
}

console.log("--- for of loop ---") 

let arr2 = [1,2,3,4,5];
arr1[5] = "newval";

for (const val of arr1) {
  console.log(val);
}

//4. create an example of const where we can update on property of the object, where it says const is mutable

console.log("-----------Q4-----------");

const Student = {
  name: "Test4",
  age: 24,
  session: "MERN"
}

console.log(Student);

Student.session = "MERNStack";
console.log(Student);

//5. create a for loop using var and let, print each value in timeout after 2 second and to demonstrate functional scope of var and lexical of let 

console.log("-----------Q5-----------");


for (var i=0; i<5; i++) {

  setTimeout(function() {
    console.log(`VAR: value of i: ${i}`); 
  }, 2000)

}

for (let i=0; i<5; i++) {

  setTimeout(function() {
    console.log(`LET: value of i: ${i}`); 
  }, 2000)

}
