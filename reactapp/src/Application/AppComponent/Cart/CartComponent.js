import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../../State/Cart/cartAction";

let CartComponent = (props)=>{
  debugger;
  let cartList = useSelector((state)=>state.CartReducer)
  let user = useSelector((state)=>state.UserReducer.User)

  let recalculate = (cartItems)=>{
    let amount = 0, count = 0;

    for(let item of cartItems) {
      amount += item.qty * item.price;
      count  += item.qty; 
    }

    return { amount, count }
  }

  let dispatchToSaveCart = useDispatch()

  let clickToSaveCart = (cart, userId)=>{
    if(!userId){
      alert("Please sign in to save the cart!!!")
    }else{
      dispatchToSaveCart(saveCartToDb(cart, userId))
    }
  }

  let navigate = useNavigate();
  let func = (evt)=>{
    navigate('/checkout');
    evt.preventDefault();
  }

  return(
    <div className="col-md-12">
      <h1>Cart Component</h1>

      {
        cartList && cartList.length >= 1 ? 
        <>
          <table>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  {
                    props.readOnly ?  "" : 
                    <>
                      <th>Remove</th>
                      <th>Edit</th>
                    </>
                  }
                </tr>
              </thead>
              <tbody>
                {
                  cartList.map(item=>{
                    return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id}/>
                  })
                } 
              </tbody>
            </table>

            <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />

            {
              props.readOnly ? <></> 
              : 
              <>
                <button onClick={() => clickToSaveCart(cartList, user._id)} >
                  Save Cart
                </button>
                {
                  user._id ? 
                  <button onClick={func} >
                    Go To Checkout
                  </button> 
                  : ""
                }
              </> 
            }
        </>
        : 
        <h2>Please add product to cart</h2>
      }
    </div>
  )
}

export default CartComponent;