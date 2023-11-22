// BIND

var Skills = {
  primarySkill: "Core Javascript",
  secondarySkill: "React and Redux",
  getSkillSet: function() {
    console.log(this.primarySkill, this.secondarySkill);
    var that=this;
    
    setTimeout(function name() {
      // this executes in its timeout context
      console.log(this.primarySkill, this.secondarySkill); 
      //output -- undefined, undefined since this is not accessible after the timeout context

      console.log(that.primarySkill, that.secondarySkill);
      //can be used to access the variables within the function
    }, 2000);

    setTimeout(function(name){
      console.log(this.primarySkill, this.secondarySkill);
    }.bind(this),2000);
  }
}

Skills.getSkillSet();
// getSkilledSet is executed over user so context/scope  is user, but it changes inside the setTimeout


// an example on UI, by doing DOM Manipulation

// HTML EXAMPLE

/* <button id="newBtnBind">Practice Div</button> */

// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)

//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​

//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)