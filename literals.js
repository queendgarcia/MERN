// Literals represent memory allocation of some/few values

var name = "Name1";
var age = 99;
var address = "Somewhere on earth";

var name2 = "Name2";
var age = 98;
var address2 = "Somewhere in US";

// Object Literals -- creating a key-value pair
var User1 = {
  name: "name3",
  age: 21
}

var User2 = {
  name: "name4",
  age: 22
}

User1.name = "name3-change";
User1.address = "somewhere";

console.log(User1, User2);
