import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux"; 

import { RemoveUserFromStore } from "../../State/User/userAction";
import NotificationComponent from "../AppComponent/Notification/NotificationComponent";

let HeaderComponent = (props) => {
  console.log(props)
  console.log("Rendering the header component");
  let userName = props.user && props.user.userName ? props.user.userName : "";
  let notifications = useSelector((state) => state.NotificationsReducer)
  let dispatchAction = useDispatch()

  let LogoutUser = () => {
    dispatchAction(RemoveUserFromStore())
  }

  return (
    <div className="col-md-12">
      Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart!!!
      <br/> 
      {userName == "" ?<b> Please Login or SignUp to see other features</b>:""}
      {
        props.user.userName ? 
        <div className="display-right">
          <NotificationComponent />
          <NavLink to="/home" onClick={()=>LogoutUser()} className="button" activeclassname="success" >Logout</NavLink>
        </div>
        : <></>
      }
      <div>
        <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
        <NavLink to="/hook" className="button" activeclassname="success" >Login </NavLink>
        <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
        {
          props.user.userName ? 
          <>
            <NavLink NavLink to="/product" className="button" activeclassname="success" >Product</NavLink>
            <NavLink to="/cart" className="button" activeclassname="success" >Cart</NavLink>
            <NavLink to="/coupon" className="button" activeclassname="success" >Coupon</NavLink>
            <NavLink to="/orders" className="button" activeclassname="success" >Orders</NavLink>
            <NavLink to="/cancelled-orders" className="button" activeclassname="success" >Cancelled Orders</NavLink>
          </>
          :
          <></>
        }
      </div>            
    </div>
  )
}

// when we need to make our component a subscriber, implement mapStateToProps
let mapStateToProps = (state) => {
  // state - store object from configure store in store.js
  return { // define the props that we need to read from store
    user: state.UserReducer.User,
    student: state.StudentReducer.Student
    // props.user -> can be used in component to read user initial state by passing it to connect()
  }
}

// when we need to make our component a publisher, we must implement mapDispatchToProps
// let mapDispatchToProps;

let mapDispatchToProps = (dispatch) => {
  return {
    loginStudent: (student) => {dispatch(addStudentToStore(student))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

// connect<{}, null, {}>
// mapStateToProps: null | undefined,
// mapDispatchToProps: MapDispatchToPropsParam<null, {}>): 

{/* <div>
  <h3>{props.header}</h3>
  <h3>Name - {props.name}</h3>
  <button onClick={() => props.getChildData("from child component")}>Pass to Parent</button>
</div> */}