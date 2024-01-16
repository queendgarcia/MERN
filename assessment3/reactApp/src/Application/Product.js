import React, {Component} from "react";

const Product = (props) => {
  return (
    <>
      <h3>Product Component</h3>
      <p>Product Name: {props.productName}</p>
      <p>Product Price: {props.productPrice}</p>
    </>
  )
}

export default Product;