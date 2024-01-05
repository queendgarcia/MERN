import React, {Component} from "react";
import "./app.css";
import HeaderComponent from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";

// class component
export default class ApplicationComponent extends Component {
  // props - is used to pass information from parent to child component
  constructor(props) { // 
    super(props); // this is used to push back updated state in parent components

    // state is tightly coupled with react renderer and reads the change to recreate virtual DOM
    this.state = {
      name: "Name 1",
      header : "10,001+ employees · UI Specialist"
    }
  }

  changeNameEvent = () => {
    // alert("Name will be updated!!!!")

    this.setState({
      name: "Name 2",
      header : "20,001+ employees· For backend dev!!!",
    })
  }

  // get data from child component using callback function
  getChildData = (data) => {
    // alert(data);
    this.setState({
      name: data
    })
  }

  // this method returns virtual DOM every change of state using this.setState
  render() { 
    // life cycle method of React.Component base class, generated virtual DOM on state change
    let a = 10, b = 5;
    // let header = "10,001+ employees · UI Specialist"
    return (
      <>
        <HeaderComponent header={this.state.header} name={this.state.name} getChildData={this.getChildData}/>
        {/* perform operation inside curly braces */}
        <b>The Arithmetic Operation {a+b} {a*b} {a-b} {a/b}</b>
        <h1>This is the Application Component</h1>
        <button onClick={this.changeNameEvent}>Change Name</button>
        <Footer>
          <h3>Keep Shopping with us</h3>
          <h3>Discount on each purchase</h3>
        </Footer>
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