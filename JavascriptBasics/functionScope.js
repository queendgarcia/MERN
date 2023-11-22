// JS is a single-threaded language

var name = "Gauri"

function PrintName() {
  // name and namePrint gets hoisted
  // every variable and function gets hoisted

  // name: undefined - default value in JS
  console.log(name); //undefined
  // if the name declaration with value of Garcia is commented out -- the name wil go outside the function and check for declaration and assign it as its value


  // When we redeclare, this gets hoisted on function top
  // var name = "Garcia"
  // console.log(name); //Garcia
  // console.log(newName);a

  namePrint();
  function namePrint() {
    var newName="Danny"
    console.log(name)
  }
}

PrintName();
console.log(name); //Gauri

//Scope
// 1. Functional Scope - new memory allocation space for each function
// 2. Anything that is outside of the function is part of the global/main function