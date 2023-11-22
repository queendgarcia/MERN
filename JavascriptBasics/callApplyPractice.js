//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply to describe both the cases

var student = {name: 'AAA', program: 'BSECE'}
var subjectList = ["Advanced Math", "Basic Programming", "English Literature", "ECE Fundamentals"]

function getStudentDetails(student, subject1, subject2, subject3) {
  console.log( `The student details are shown below: 
      Name is ${this.name}
      Program is ${this.program}`)
  
  console.log( `subjects: 
      ${subject1}
      ${subject2}
      ${subject3}`)
}

getStudentDetails.call(student, "subjects","call", "is", "applied");

console.log("------ USING APPLY ------")
getStudentDetails.apply(student, subjectList);
