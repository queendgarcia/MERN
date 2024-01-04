import React from 'react';

let Footer = (props) => {

  // props are immutable
  // props.name = "Props immutable"; // this is not allowed as props is immutable
  // error: Cannot add property name, object is not extensible

  // from child to parent passing of props 

  return ( // JSX -> Javascript-like XML structure
    <>
      <h2>Footer Component</h2>
      {/* {props.name} */}
      {props.children[0]}
      {props.children[1]}
    </>
  )
}

export default Footer;