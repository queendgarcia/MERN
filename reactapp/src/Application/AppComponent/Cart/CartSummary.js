import React from "react";

const CartSummaryComponent = (props)=>{
  let { count, amount } = props.data;

  return(
    <div>
      <h2> Cart Summary </h2>
      <p> Amount: {amount} </p>
      <p> Products Count: {count} </p>
    </div>
  )
}

export default CartSummaryComponent;