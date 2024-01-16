import React, {Component} from "react";

const SuccessChild = (props) => {
  return (
    <>
      <h4>SuccessChild</h4>
      <p>{props.name}</p>
      <p>{props.address}</p>
      {props.SuccessStory}
    </>
    
  )
}

export default SuccessChild;