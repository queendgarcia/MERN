import React, { Component } from "react";
import {PropTypes} from "prop-types";

export default class HomeComponent extends Component {

  // Creation Life Cycle Methods
  // 1. Firstly, all properties and states get initialized
  constructor(props){ //props - is used to pass information from parent to child component
    super(props); //this is used to push back updated state in parent components

    this.state = {
      userName: props.userName,
      userSession: "MERNStack"
    }

    this.intervalObj = "";

    // creating reference elements to access directly when we need
    // can be used to directly change UI without going through state change
    this.address = React.createRef();
    this.age = React.createRef();

  }

  // 2. Ensures that component has rendered first time and html is in place on browser
  // We can do state change and also make server calls
  componentDidMount() {
    this.callInterval();
    setTimeout(() => {
      this.address.current.value = "Address Changed";
      this.age.current.value = "Age Changed";
      this.age.current.focus();
    }, 3000)
  }

  callInterval = () => {

    // this.intervalObj = setInterval(() => {
    //   // this will still run even in other components
    //   console.log("interval gets called in Home Component")
    //   this.setState({
    //     userName: "Changed Name"
    //   })
    // }, 3000) 

  }

  // 3. Destruction life cycle method - used to clear callbacks and api subscriptions
  componentWillUnmount() {
    console.log("Component is unmounted");
    clearInterval(this.intervalObj);
  }

  textChange = (evt) => {
    let target = evt.target.value;
    console.log(target)

    this.setState({
      userName: target
    })

    evt.preventDefault();
  }

  sessionChange = (evt) => {
    let target = evt.target.value;
    console.log(target)

    this.setState({
      userSession: target
    })

    evt.preventDefault();
  }

  // create virtual DOM before the actual DOM
  render(){
    // console.log("render method called to create virtual dom")
    return(
      <>
          <h1>Home Component</h1>
          <b>{this.props.userName}</b>
          <b>{this.state.userName}</b>

          {/* controlled way of component creation - handling through state */}
          {/* tightly coupled with state - hence changes for values cannot be handled hence we need to implement onChange function*/}
          <div className="col-md-12">
            <div className="col-md-8">
              <label>User Name</label>
              <input type="text" value={this.state.userName} onChange={this.textChange} maxLength={20}></input>
            </div>
            <div className="col-md-8">
              <label>User Session</label>
              <input type="text" value={this.state.userSession} onChange={this.sessionChange} maxLength={20}></input>
            </div>
          </div>

          {/* uncontrolled way of component creation - handling through ref */}
          <input type="text" value={"Default User Address"} ref={this.address}></input>
          <input type="text" value={"Default User Age"} ref={this.age}></input>
      </>
    )
  }
}

// when no props for userName is passed, we can define default values
// HomeComponent.defaultProps = {
//   userName : "Default Name"
// }

// setting required props
HomeComponent.propTypes = {
  userName : PropTypes.string.isRequired
}