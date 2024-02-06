import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../State/Product/productAction";
import ProductItemComponent from "./ProductItemDisplay";

// import {addItemToCart} from "../../../State/CartPractice/cartAction.js";

let DisplayProducts = ()=>{

  let products = useSelector((state)=>state.ProductReducer.Products)
  let dispatchToFetchProduct = useDispatch();

  console.log(products)
  //component did mount
  useEffect(()=>{
    products && products.length == 0 ? dispatchToFetchProduct(fetchProducts()) : []
  },[])

  // let itemsInCart = useSelector((state) => state.CartReducerPractice.CartItems)
  // let dispatchAction = useDispatch();

  // let addItemToCartFnc = (product) => {
  //   console.log(product);
  //   dispatchAction(addItemToCart(product));
  // }

  return(
    <>
      {
        products && products.length > 0 ?
        products.map((productItem)=>{
          return <ProductItemComponent product={productItem} key={productItem._id} />
        })
        : <h4>No Products To Display</h4>
      }
    </>
  )
}

export default DisplayProducts;