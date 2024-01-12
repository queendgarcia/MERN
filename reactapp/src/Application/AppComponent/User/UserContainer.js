// Container contains redux and react redux connection, implements mapStateToProps and mapDispatchToProps
// Also allows developer to isolate react components with functions

import { connect } from "react-redux";
import UserComponent from "./UserComponent.jsx";
import { AddUserToStore, SaveUserToDB } from "../../../State/User/userAction.js";

// subscriber
let mapStateToProps = (state) => {
  // state - store object from configure store in store.js
  return { // define the props that we need to read from store
    user: state.UserReducer.User
    // props.user -> can be used in component to read user initial state by passing it to connect()
  }
}

// publisher
let mapDispatchToProps = (dispatch) => {
  return {
    AddUser : (userObj) => { dispatch(AddUserToStore(userObj)) },
    LoginUser: (newUser) => { dispatch(SaveUserToDB(newUser)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
