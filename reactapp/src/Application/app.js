import React from "react";
import HeaderComponent from "./Common/headerComponent";

let ApplicationComponent = () => {
  let a = 10, b = 5;
  return (
    <>
      <HeaderComponent />
      {/* perform operation inside curly braces */}
      <b>The Arithmetic Operation {a+b} {a*b} {a-b} {a/b}</b>
      <h1>This is the Application Component</h1>
    </>
  )
}

export default ApplicationComponent;