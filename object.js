// object


var User = {
  Name: "Gauri",
  Age: 22,
  Session: "MERNStack",
  getUserDetails: function() {
    return {
      Name: this.Name,
      Session: this.Session,
      Address: this.Address,
      // Salary: this.Salary
      // Speciality: this.Speciality
      // Speciality will be added below
    }
  }
}

// adding properties using prototype
User.__proto__.Address = "US";

console.log(User.getUserDetails());

// Inheritance of JS Object

// 1. Using new keyword is not a right way to inherit but a good way for extension and copy

// var Engineer = new Object(User);

// not recommended
// Engineer.__proto__.Salary = "$25000";

// console.log(Engineer.getUserDetails());
// console.log(User.getUserDetails());
// this new User.getUserDetails() will also print the 25000 - this is incorrect in terms of inheritance concept, as it also has an access to its child class Engineer


// 2) Object.Create() --> correct way of inheriting 

var Engineer = Object.create(User);

// without prototype, it will only attach to the Engineer
Engineer.Speciality = "Mechanical Engineer";
Engineer.Name = "Danny"; // overriding

// when adding prototype/proto keyword - we add it to the parent or User
// Engineer.__proto__.Speciality = "EE";

Engineer.getSpeciality = function() {
  console.log(this.Name, this.Speciality);
}

// overrides the function as well but it will be specific to the Engineer object
Engineer.getUserDetails = function() {
  return {
    Speciality: this.Speciality,
    Address: this.Address,
    Name: this.Name
  }
}

console.log(Engineer.getUserDetails());
console.log(User.getUserDetails());


// note: every object created in JS has a prototype object inside to create a chain to see the inherited properties -- which can be accessed

// 3) Prototype of Empty Object

var emptyObj = {}

// 4) Object without prototype 

var noPrototype = Object.create(null);
//  null object

// 5) Object.Assign - merge with immutability in place

var User1 = { name: "Garcia", add1: "US", mobile: "1234567890"}

var Address1 = {name: "Garcia", add1: "US 2", productName: "new product"}

// this will copy all the details both the common and uncommon
// var Delivery = {User, Address}
// console.log(Delivery)

// Use of Object.assign
var Delivery = {}
Delivery = Object.assign(Delivery, User1, Address1);
User1.Session = "Test Sessions";
// will not impact the Delivery -- follows the princicple of immutability
console.log(Delivery);





