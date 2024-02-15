import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../State/Cart/cartAction";
import { getReviews } from "../../../State/Reviews/itemReviewsAction";

let ProductItemComponent = ({product})=>{

  let [showHide, toggleShowHide] = useState(false)

  let dispatchAction = useDispatch();

  let addProductToCart = ( product )=>{
    dispatchAction(addItemToCart(product))
  }
  
  let navigate = useNavigate();

  let goToItemReviews = (productId) => {
    console.log("go to item reviews " + productId)
    dispatchAction(getReviews(productId))
    navigate(`/reviews?product=${productId}`)
  }

  return(
    <ul className="product col-md-11 mx-3">
      <li className="product" onClick={()=>toggleShowHide(!showHide)}>
      {product.name}
      {showHide ? 
        <ul>
        <li>{product.price}</li>
        <li>{product.desc}</li>
        <li>{product.rating}</li> 

        <button onClick={() => addProductToCart(product)}>Add To Cart</button> 
        <button onClick={() => goToItemReviews(product._id)}>Go to Reviews</button> 
      </ul>
      : 
      <></>
      } 
      </li>
    </ul>
  )

}

export default ProductItemComponent;