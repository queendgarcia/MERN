import React, { useRef, useState } from 'react';
import axios from 'axios';

const ProductComponent = (props) => {

  // let [productName, setProductName] = useState(""); 
  let productName = useRef(null);
  let [productPrice, setProductPrice] = useState("");
  let [productDesc, setProductDesc] = useState("");
  let [productRating, setProductRating] = useState("");


  let submitDetails = (evt) => {
    console.log("clicked submit product details")
    let updatedName = productName.current.value
    console.log(updatedName, productPrice, productDesc, productRating);

    let productDetails = {
      "name" : updatedName,
      "price": productPrice,
      "description" : productDesc,
      "rating" : productRating
    }

    axios.post("http://localhost:9000/productpractice/api/details", productDetails)
		.then((response)=>{
			console.log(response.data)
		})
		.catch((err)=>{
			console.log(err)
		})

    evt.preventDefault();
  }

  return (
    <>  
      <h3 className="mx-3">Product Details</h3>
      <form>
        <div className="form col-md-8 p-3">
          <div className="col-md-12">
            <b>Name</b>
            <input type="text" className="form-control col-md-6 username" 
              ref={productName} placeholder="Name" maxLength={40}/>
          </div>
          <div className="col-md-12">
            <b>Price</b>
            <input type="text" className="form-control col-md-6 pass" 
              value={productPrice} onChange={(evt) => setProductPrice(evt.target.value)} 
            placeholder="Price" maxLength={40}/>
          </div>
          <div className="col-md-12">
            <b>Description</b>
            <input type="text" className="form-control col-md-6 street" 
            value={productDesc} onChange={(evt) => setProductDesc(evt.target.value)} 
            placeholder="Description" />
          </div>
              
          <div className="col-md-12">
            <b>Rating</b>
            <input type="text" className="form-control col-md-6 mobile" 
              value={productRating} onChange={(evt) => setProductRating(evt.target.value)} 
              placeholder="Rating" />
          </div>
          <input type="button" className={"btn btn-primary col-md-4 m-3"} 
            value={"Submit Product Details"} 
            onClick={submitDetails}/>
        </div>
      </form>
    </>
  )
}

export default ProductComponent; 