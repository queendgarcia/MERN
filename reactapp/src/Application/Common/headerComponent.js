import React from "react";

let HeaderComponent = (props) => {
  return (
    <>
      <h2>Shopping Cart Application</h2>
      <h3>{props.header}</h3>
      <h3>Name - {props.name}</h3>
      <button onClick={() => props.getChildData("from child component")}>Pass to Parent</button>
    </>
  )
}

export default HeaderComponent;