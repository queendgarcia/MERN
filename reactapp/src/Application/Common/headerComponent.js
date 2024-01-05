import React from "react";
import { NavLink } from "react-router-dom";

let HeaderComponent = (props) => {
  console.log("Rendering the header component");
  let userName = "Default User"

  return (
    <>
      Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
      {userName == "" ?<b> Please Login to see other features</b>:""}
      <div>
        <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
        <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
      </div>

      <div>
        <h3>{props.header}</h3>
        <h3>Name - {props.name}</h3>
        <button onClick={() => props.getChildData("from child component")}>Pass to Parent</button>
      </div>
    </>
  )
}

export default HeaderComponent;