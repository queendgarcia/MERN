import React, {Component} from "react";

export default class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();

  }
  // uncontrolled way of component creation - handling through ref
  formSubmit = (evt) => {
    let username = this.username.current.value;
    let password = this.password.current.value;

    alert(`UserSignIn: Username: ${username}, Password: ${password}`);

    evt.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <h3>Username</h3>
          <input type="text" placeholder="Username" ref={this.username}></input>
          <h3>Password</h3>
          <input type="text" placeholder="Password" ref={this.password}></input>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    )
  }
}