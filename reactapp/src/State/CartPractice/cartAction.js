import axios from "axios";

export const addItemToCart = (product) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: {product}
  }
}


export const saveItemsToCart = (details)=>{
  console.log("before saving cart items: ", JSON.stringify(details));

  return function () {

    axios.post("http://localhost:9000/cartpractice/api/items",
    details
    )
    .then((allData)=>{
      console.log("cart items response ", allData);
      // dispatch(fetchProducts());
    })
    .catch((err)=>{
      console.log("Error While Saving Cart Items", err)
    })
  }
};