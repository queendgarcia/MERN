import React from 'react';

let Footer = (props) => {

  // props are immutable
  // props.name = "Props immutable"; // this is not allowed as props is immutable
  // error: Cannot add property name, object is not extensible

  // from child to parent passing of props 

  return ( // JSX -> Javascript-like XML structure
    <>
      <div className="footer">
        © Copyright 2023 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
      </div>
      {/* <h2>Footer Component</h2>
      {props.children[0]}
      {props.children[1]} */}
    </>
  )
}

export default Footer;