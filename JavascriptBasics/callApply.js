// 

var user = { name: "AA", age: 21, session: "JavaScript"}
var user2 = { name: "BB", age: 20, session: "JavaScript"}

name = "Global Name"
age = 22

function printDetails() {
  // console.log(name,age,session); // will not work
  // console.log(user.name,user.age, user.session);
  console.log(this);
  console.log(this.name,this.age, this.session); 
  // this --> execution context of executing function
  // this, right now, is a global object
}

// printDetails();
// this will now print the global name as the printDetails function has no object and the declaration of global name and age is within the global scope where printDetails is called
// if you do not assign any object inside the function, it will create a function that is in scope in the execution

function printDetails2(comment) {
  console.log(comment)
  console.log(this.name, this.age, this.session)
}

// call --> accepts first parameter which we want to set as execution context (this)
printDetails2.call(user, "Setting execution context of a function using call");
printDetails2.call(user2, "Setting execution context of a function using call");

function getDetails(concept, session1, session2, session3, session4, session5) {
  console.log(`call extenstion - ${concept}`)
  console.log( `${session1}  
                    ${session2} 
                      ${session3}
                        ${session4}
                          ${session5}`)

  if(this.name) {
    console.log( `The user details are shown: 
    Name is ${this.name}
    Age is ${this.age}
    Session is ${this.session}`)
  } else {
    console.log("Context is not used but parameters are used");
  }
}

getDetails.call(user, "Setting", "execution", "context", "of a function", "using call");

// getSessionList -- returns list of sessions []

var sessionList = ["JS", "ES6", "NODEJS", "Express", "React", "Redux"]

getDetails.apply(user, sessionList);
getDetails.apply(user2, sessionList);
getDetails.apply(null, sessionList);


// To do the sum

var arrayNum = [1,2,3,4,5,6]

//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply to describe both the cases

var student = {name: 'AAA', program: 'BSECE'}
var sessionList = ["Advanced Math", "Basic Programming", "English Literature"]

function getStudentDetails(student, subject1, subject2, subject3) {
  console.log("Subjects");
  console.log(`${subject1}
               ${subject2}
               ${subject3}`)

  console.log( `The student details are shown below: 
  Name is ${this.name}
  Program is ${this.program}`)
}

getStudentDetails.call(student, "call", "is", "applied");