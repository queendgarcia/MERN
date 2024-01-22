import React, {Component } from 'react';
import axios from "axios";

export default class StudentComponent extends Component{
  constructor(props) {
    super(props);

    this.state = {
      userName: props.student.userName,
      password: props.student.password,
      street: props.student.street,
      mobile: props.student.mobile,
      session: props.student.session
    }

    this.name = "Student";

  }

  onTextChange = (evt) => {
    let target = evt.target;
    let classList = target.classList;
    let value = target.value;

    if (classList.contains("username")){
      this.setState({ userName : value })
    } else if (classList.contains("pass")) {
      this.setState({ password : value })
    } else if (classList.contains("street")) {
      this.setState({ street : value })
    } else if (classList.contains("mobile")) {
      this.setState({ mobile : value })
    } else {
      this.setState({ session : value })
    }   
    evt.preventDefault();
  }

  loginUser = (evt) => {
    let newUser = this.state; 
    console.log("Logging In - " + JSON.stringify(newUser));

    axios.post("http://localhost:9000/student/api/login",
			newUser 
		)
		.then((user)=>{
			let signedUser = user.data;
			console.log(signedUser)
			this.props.addStudent(signedUser);
      this.name = signedUser.userName;
		})
		.catch((err)=>{
			console.log(err)
		})

    evt.preventDefault();
  }

  render() {
    return (
    <>
      <h1>StudentComponent</h1>
      <h5>Hello, {this.name}</h5>

      <form>
      <div className="col-md-12">
        <b>User Name</b>
        <input type="text" className="form-control col-md-6 username" 
          value={this.state.userName} 
          placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
      </div>
      <div className="col-md-12">
        <b>Password</b>
        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
          placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
      </div>
      <div className="col-md-12">
        <b>Street </b>
        <input type="text" className="form-control col-md-6 street" value={this.state.street} 
          placeholder="Street Name" onChange={this.onTextChange} />
      </div>

      <div className="col-md-12">
        <b>Mobile </b>
        <input type="text" className="form-control col-md-6 mobile" value={this.state.mobile} 
          placeholder="Mobile" maxLength="11"
          onChange={this.onTextChange} />
      </div>

      <div className="col-md-12">
        <b>Session </b>
        <input type="text" className="form-control col-md-6 session" value={this.state.session} 
          placeholder="Session" maxLength="11"
          onChange={this.onTextChange} />
      </div>

      <input type="button" className={"btn btn-primary col-md-2 m-3"} value={"Login"}
        onClick={this.loginUser}/>
      </form>
    </>
    )
  }
}


// let mapStateToProps = (state) => {
//   return { 
//     user: state.UserReducer.User,
//     student: state.StudentReducer.Student
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     loginStudent: (student) => {dispatch(addStudentToStore(student))}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent);