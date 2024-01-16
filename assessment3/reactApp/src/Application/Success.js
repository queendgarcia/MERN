import React, {Component} from "react";

import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import UserSignIn from "./UserSignIn";
import Product from "./Product";
import LifeCycleHooks from "./LifeCycleHooks";

export default class Success extends Component {
  constructor(props) {
    super(props);
  }

  getSuccessStory = (data) => {
    alert("data from child: " + data);
  }
  render() {
    return (
      <>
        <h1>Success quote: Success is the sum of small efforts, repeated day in and day out.</h1>
        <SuccessChild 
          name={"Name 1"} 
          address={"CA"} 
          SuccessStory=<SuccessStory  getSuccessStory={this.getSuccessStory} /> 

        />
        <UserSignIn />
        <Product productName="product 1" productPrice="price 1"/>
        <LifeCycleHooks duration="2 months"/>
      </>
    )
  }
}