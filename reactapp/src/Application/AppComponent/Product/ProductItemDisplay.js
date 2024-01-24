import React, { useState } from "react";

let ProductItemComponent = ({product})=>{

  let [showHide, toggleShowHide] = useState(false)

  return(
    <ul className="product col-md-11 mx-3">
      <li className="product" onClick={()=>toggleShowHide(!showHide)}>
      {product.name}
      {showHide ? 
        <ul>
        <li>{product.price}</li>
        <li>{product.desc}</li>
        <li>{product.rating}</li> 

        <button onClick={()=>console.log("Test")}>Add To Cart</button> 
      </ul>
      : 
      <></>
      } 
      </li>
    </ul>
  )

}

export default ProductItemComponent;