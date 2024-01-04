import React from "react";

let HeaderComponent = (props) => {
  return (
    <>
      <h2>Shopping Cart Application</h2>
      <h3>{props.header}</h3>
      <h3>Name - {props.name}</h3>
    </>
  )
}

export default HeaderComponent;