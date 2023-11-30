// map -- is a data structure which is used to create objects and array with different types of keys

// MAP -> is a special kind of Collection created in ES6 to set iterables...


// [{key: "value"}]
let myMap = new Map();

let keyString = 'a string', keyObj={}, keyFunc = function() {}, keyNum = 2000;


myMap.set(keyString, "string type key"); // ['a string', 'string key type']
myMap.set(keyObj, "object type key");
myMap.set(keyFunc, "function type key");
myMap.set(keyNum, "number type key");

console.log(myMap.has("a string")); // true
console.log(myMap.get("a string")); // string type key
console.log(myMap.entries());

console.log(myMap.get({})); // undefined -- references are stored differently from this kind of declaration
console.log(myMap.get(function() {})); // undefined

//----check notes----

console.log(myMap.delete("a string"));
console.log(myMap.get("a string"));


// when we need an iterable/collection with unique values

// Set --> this maintains a set of unique collection with additional properties and methods like map

//----check notes----

let StudentSet = new Set(["A", "B", "C", "D","E"]);

console.log(StudentSet.values());





