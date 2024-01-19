import React, { Component, PureComponent } from "react";
import {PropTypes} from "prop-types";

// instead of using Component, we can use PureComponent
// export default class HomeComponent extends Component {

// as Purecomponent is used to compare all the props and states as we do in shouldComponentUpdate method
// Why should we use PureComponent? it is better for performance as it handles changes in state values but the disadvantage is it compares ALL states and props with themselves; hence, if there are a lot of states and yyou only change one, it will still compare ALL states with their current values - whether changed or not
export default class HomeComponent extends PureComponent {

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
    // setTimeout(() => {
    //   this.address.current.value = "Address Changed";
    //   this.age.current.value = "Age Changed";
    //   this.age.current.focus();
    // }, 3000)
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
    let classList = evt.target.classList;
    console.log(target)

    if (classList.contains("userName")) {
      this.setState({
        userName: target
      })
    }
    else {
      this.setState({
        userSession: target
      })
    }

    evt.preventDefault();
  }

  formSubmit = (evt) => {
    
    let address = this.address.current.value;
    let age = this.age.current.value;

    // 1. api to change the state - to be used
    this.setState({address, age});

    // 2. use of this.state -- this will not call render method 
    // as this only assigns the value and react assumes that the state are only updated but render method is not necessarily needed
    // this.state.address = address;
    // this.state.age = age;
    // cont. api to render method by skipping life cycle methods - should be avoided
    // skipping life cycle methods means that it also skips the shouldComponentMethod as it forcefully calls render
    // this.forceUpdate();

    // alert(this.state.address + this.state.age);
    evt.preventDefault();
  }

  // 4. Update life cycle method - decides whether re-render should happen or not
  // shouldComponentUpdate(nextProps, nextState) {
  //   // shouldComponentUpdate -> used to control the rendering of components that handle state changes for performance
  //   // nextProps for props that are passed to the component
  //   // nextState for state changes
  //   console.log("shouldComponentUpdate", nextProps,nextState)

  //   if (nextState.address === this.state.address && nextState.age === this.state.age) {
  //     return false // no need to call render method as states are same
  //   } else {
  //     return true
  //   }
  //   // return true;
  // }

  // 5. getSnapshotBeforeUpdate -> used for handling values before update
  getSnapshotBeforeUpdate(prevState, prevProps){
    console.log("getSnapshotBeforeUpdate");
    console.log("prevState", prevState);
    console.log("prevProps", prevProps);
    return {
        prevState,
        prevProps
    }
  }

  // 6. componentDidUpdate -> once update has happened, and you want to revoke some values
  componentDidUpdate(prevState, prevProps){
    console.log("componentDidUpdate");
    console.log("prevState",prevState);
    console.log("prevProps", prevProps);

    // this.setState({
    //     userName : prevState.userName
    // })
  }
  // create virtual DOM before the actual DOM
  render(){
    // render method gets called every time there is a state change
    console.log("render method called to create virtual dom")
    return(
      <div className={"loadimage form"} >
      <h1>{this.state.title}</h1>
      <b className="feature">{"Product Feature's :"}</b>
      <ul>                     
          <li>Sign up new users</li>
          <li>Login existing users.</li>                
          <li>Allow user's to add to cart.</li>
          <li>Save the user's cart.</li>
          <li>Checkout and pay for items.</li>
          <li>Allow users to cancel the order.</li>
          <li>Allow users to reorder the cart.</li>
          <li>Add products/items to create product collection.</li>
          <li>Allow users to give ratings to each product.</li>
          <li>Have notifications on top right with logout.</li>
      </ul>

      {/* <video width="320" height="240" controls autoplay>
          <source src={require('../../videos/video.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
      </video> */}
      </div>
      )
    }
  }
  
  // <>
  //     <h1>Home Component</h1>
  //     <b>{this.props.userName}</b>
  //     <b>{this.state.userName}</b>
  //     <b>{this.state.address}</b>
  //     <b>{this.state.age}</b>

  //     {/* controlled way of component creation - handling through state */}
  //     {/* tightly coupled with state - hence changes for values cannot be handled hence we need to implement onChange function*/}
  //     <div className="col-md-12">
  //       <div className="col-md-8">
  //         <label>User Name</label>
  //         <input type="text" className="userName" value={this.state.userName} onChange={this.textChange} maxLength={20}></input>
  //       </div>
  //       <div className="col-md-8">
  //         <label>User Session</label>
  //         <input type="text" className="userSession" value={this.state.userSession} onChange={this.textChange} maxLength={20}></input>
  //       </div>
  //     </div>

  //       {/* uncontrolled way of component creation - handling through ref */}
  //     <form className="form" action="/api/loginUser" onSubmit={this.formSubmit}>
  //       <b>Address</b>
  //       <input type="text" placeholder={"Default User Address"} ref={this.address}></input>
  //       <b>Age</b>
  //       <input type="text" placeholder={"Default User Age"} ref={this.age}></input>
  //       <button type="submit">Save</button>
  //     </form>
  // </>

// when no props for userName is passed, we can define default values
// HomeComponent.defaultProps = {
//   userName : "Default Name"
// }

// setting required props
HomeComponent.propTypes = {
  userName : PropTypes.string.isRequired
}