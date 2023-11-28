// We can do iterations over an array and also by using for, for in/of loop
// However when needed to iterate and at the same time do manipulation in array of objects or in object
// When we perform these operations, these new changes should not impact the core object, for the purpose of preserving the immutability.

let personsList = [
  {id : 1, name : "John", savedby : "CaptainAmerica"},
  {id : 2, name : "Alice", savedby : "IronMan"},
  {id : 3, name : "Roger", savedby : "CaptainAmerica"},
  {id : 4, name : "Adam", savedby : "IronMan"},
  {id : 5, name : "Alex", savedby : "SpiderMan"},
  {id : 6, name : "Robin", savedby : "Batman"}
];

// 1. List of persons saved by captain america

let personsSvdByCA = personsList.filter(person => person.savedby == "CaptainAmerica");

// console.log("Use of .filter array method");
// console.log(personsSvdByCA);

// 2. List the Names of persons saved by Iron Man
 
let personsSvdByIronMan = personsList.map(person => person.savedby == "IronMan" ? person.name : "").filter(person => person != "");

// console.log("Use of .map and .filter array method");
// console.log(personsSvdByIronMan);

let personManipulation = personsList.map((person) => {
  if(person.savedby == "IronMan") return {
    "Person Name": person.name + " Safe",
    "ID": person.id + 10
  }
}).filter(person => person != undefined);

// console.log("Data Manipulation: Use of .map and .filter array method");
// console.log(personManipulation);


// 3. Any person saved by SpiderMan
// .some() array method --> returns boolean

let isOneSvdBySpiderman = personsList.some(person => person.savedby = "Spiderman");

// console.log("Use of .some method:");
// console.log(isOneSvdBySpiderman);

let isOneSvdByHulk = personsList.some(person => person.savedby == "Hulk");

// console.log(isOneSvdByHulk);


// 4. Get count of uniquely saved persons by each superhero

// console.log("Use of .reduce method");
let eachSuperHeroSaves = personsList.reduce((prevVal, currVal, index, list) => {
  // console.log(`prevVal: ${prevVal}`);
  // console.log(`currVal: ${currVal.name}`);

  // console.log(`index: ${index}`);
  // console.log(`list ${JSON.stringify(list)}`);

  // console.log(prevVal);

  prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;

  return prevVal;
}, new Set());

// console.log(eachSuperHeroSaves);


// QUESTIONS


let persons = [
  {id : 1, name : "John", tags : "javascript"},
  {id : 2, name : "Alice", tags : "dotnet"},
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
let personJsTag = persons.filter(person => person.tags == "javascript");
console.log("-------Q1--------");
console.log(personJsTag);

//2. List the same on person using java and put programmer after their name, change the name key to Developer

let personJavaTag = persons.filter(person => person.tags == "java").map((person) => {
  return {
    id: person.id,
    Developer: person.name + " Programmer",
    tags: person.tags
  }
});

console.log("-------Q2--------");
console.log(personJavaTag);


//3. If we have anyone with tag python
let personPythonTag = persons.some(person => person.tags == "python");

console.log("-------Q3--------");
console.log(`with python tag: ${personPythonTag}`);

//4. Find the number of unique tags and their count present in list

console.log("-------Q4--------");
let countTags = persons.reduce((count, person, index, personsArr) => {

  if (!count[person.tags] === true) {
    let filteredArr = personsArr.filter(element => element.tags == person.tags)
    count[person.tags] = filteredArr.length;
  }
  return count;
},{});

console.log(countTags);