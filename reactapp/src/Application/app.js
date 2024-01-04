import React, {Component} from "react";
import HeaderComponent from "./Common/HeaderComponent";
import PracticeComponent from "./Common/PracticeComponent";

// class component
export default class ApplicationComponent extends Component {

  render() {
    let a = 10, b = 5;
    let header = "10,001+ employees · UI Specialist"
    return (
      <>
        <HeaderComponent header={header} name={"Name 1"}/>
        {/* perform operation inside curly braces */}
        <b>The Arithmetic Operation {a+b} {a*b} {a-b} {a/b}</b>
        <h1>This is the Application Component</h1>
        <h1>{header}</h1>
        {/* <PracticeComponent /> */}
      </>
    )
  }
}

//functional component
// let ApplicationComponent = ()=>{
//     let a = 10, b = 5;
//     let header = "10,001+ employees · UI Specialist"
//     return(
//         <>
//             <HeaderComponent/>
//             <b>The Arithmatic Operation {a+b} {a*b} {a-b} {a/b}</b>
//             <h1>This is the Application Component</h1>
//             <h1>{header}</h1>
//         </>
//     )
// }

// export default ApplicationComponent