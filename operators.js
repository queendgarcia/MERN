// OPERATORS

// && --> AND,  || --> OR, ! --> NOT, = --> assignment, ==, ===, <, >, >=, <=, ++

// ternary operator  -->  ?

var validVoter = true;

var voterAge = "18";

// == --> checks value, not data type
// === --> checks value AND data type

if (validVoter && voterAge === 18) {
  console.log("Valid Voter - can vote")
} else {
  console.log("Invalid voter - can't vote ")
}

// ternary operator 
// condition ? true result : else result

validVoter && voterAge === 18 ? console.log("valid voter") : console.log("invalid voter");

// continuous variable declarations

var firstVar = 1, second = 2;

console.log(firstVar, second);

