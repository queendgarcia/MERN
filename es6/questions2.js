

//1 Example of bind function on browser, we must be able to change the object on click 
console.log("-----------Q1-----------");

// <button id="testBtn">Test Button</button>
var testButton = document.getElementById("testBtn");

var testObj = { "name": "test-object", "purpose": "practice"}

var clickBtn = function() {
  alert(`This is a ${this.name} for ${this.purpose}`)
}

testButton.addEventListener("click", clickBtn.bind(testObj), false);

//2 Create object without protoype and the inherit it futher

console.log("-----------Q2-----------");

var User = { 
  name: "Test",
  age: 22
}

var Student = Object.create(User);

Student.program = "ECE";
console.log(Student.name, Student.age, Student.program);


//3 Create a function to populate user details. 
//	func - populateDetail prints Adress and accepts a callBackFunction which prints Name, Age and Topic

console.log("-----------Q3-----------");

var populateDetails = (address, callbackFnc) => {
  console.log(address)
  callbackFnc("test", 22, "mern");
}

var printDetails = (name, age, topic) => {
  console.log(`Name: ${name}, Age: ${age}, Topic: ${topic}`);
}

populateDetails("USA", printDetails);

//4 Javascript currying is achieved by returning functions from functions. Here, the outer function (print) 
//	supplies the printing to be used while the returned function allows the caller to supply the name of the printer.

console.log("-----------Q4-----------");
var print = () => {
  return function(name) {
    console.log(`name: ${name}`); 
  }
}

var printName = print();
printName("test-JS-currying");

//5 Create Two objects UserDetail (Properties should be  Name, Age, Street)and UserAddress(Name, Street, City, ZipCode), merge both of them in to UserDetail.

console.log("-----------Q5-----------");
var UserDetail = {
  name: "Name1",
  age: 24,
  street: "1234 Street"
}

var UserAddress = {
  name: "Name2",
  street: "12345 Street",
  city: "City1",
  zipcode: 1122
}

console.log(UserDetail);

Object.assign(UserDetail, UserDetail, UserAddress);
console.log(UserDetail);