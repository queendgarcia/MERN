//Arrow Func or FAT arrow function are new way of writing functions and do have below benefits
//lambda expsn  ()=>

//1. ease of writing function like lambda expression
// function Add(p1, p2) {
//     return p1+p2
// }
// console.log(Add(5,9))

let AddArr = (p1, p2) => p1+p2
console.log(AddArr(5,9))

let AddArr2 = (p1, p2) => {
        return `The Sum is ${p1+p2}`
    }
console.log(AddArr2(5,9))


//2.  helps resolving scope by copying the context of parent function in settimeout or delayed executions

let Skills = {
    primarySkill : "Core Javascript",
    secondaySkill : "React and Redux",
    //getSkillSet : () => {
    getSkillSet : function() {
        console.log(this.primarySkill, this.secondaySkill)

        // var that = this; //copying the context of parent
        // setTimeout(function name() { 
        //     console.log(that.primarySkill, that.secondaySkill)
        // }, 2000)

        //arrow function solves problem by copying the context of parent function
        setTimeout(() => { 
            console.log(this.primarySkill, this.secondaySkill)
        }, 2000)
    }
}

Skills.getSkillSet() 


//create an arrow function slove the problem with bind, in student object, where method is to displayStudentDetails