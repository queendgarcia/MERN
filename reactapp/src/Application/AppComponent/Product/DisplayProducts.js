import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../State/Product/productAction";
import ProductItemComponent from "./ProductItemDisplay";

let DisplayProducts = ()=>{

  let products = useSelector((state)=>state.ProductReducer.Products)
  let dispatchToFetchProduct = useDispatch();

  console.log(products)
  //component did mount
  useEffect(()=>{
    products && products.length == 0 ? dispatchToFetchProduct(fetchProducts()) : []
  },[])

  return(
    <>
      {
        products && products.length > 0 ?
        products.map((productItem)=>{
          return <ProductItemComponent product={productItem} _id={productItem._id} />
        })
        : <h4>No Products To Display</h4>
      }
    </>
  )
}

export default DisplayProducts;