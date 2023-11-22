// We have a different type of functions that we can  use to behave like class and this kind of function definition is termesd as --> construction function

// prototype in JS --> is an object associated to each function and object, which provides us inheritance, by chaining parent child

var funcAsClass = function(name,age,address) {
  // this: is the score of function in which it executes (this -- keyword)

  this.name = name;
  this.age = age;
  this.address = address;

  this.getUserDetails = function(isAdmin) {
    return {
      name: this.name,
      age: this.age,
      session: this.session
    }
  }
}

funcAsClass.prototype.session = "Javascript Basics";

var funcObj = new funcAsClass("Bryan", 20, "US");

console.log(funcObj.getUserDetails(true));


// new object from class

var funcObj2 = new funcAsClass("Arda", 19, "US");

console.log(funcObj2.address);
console.log(funcObj2.getUserDetails(true));

// using prototype, we can add properties in child class or object
// funcObj2.__proto__.hobbies

funcObj2.hobbies = "Reading, Playing Soccer";

funcObj2.getHobbies = function(params) {
  console.log("Hobbies are: " + this.hobbies);
}

console.log(objFunc2.getHobbies());

//override the function
objFunc2.getUserDetails = function() {
  return {
    name: this.name,
    age: this.age,
    session: this.session,
    hobbies: this.hobbies
  }
}

console.log(objFunc2.getUserDetails());
// console.log(objFunc.getUserDetails());

//create a constructor function to print user details add one information using prototype