import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { saveItemsToCart} from "../../../State/CartPractice/cartAction";

const CartComponentPractice = () => {
  let itemsInCart = useSelector((state) => state.CartReducerPractice.CartItems)
  let loggedInUser = useSelector((state) => state.UserReducer.User)

  let dispatchAction = useDispatch();
  const navigate = useNavigate();

  let saveCartItems = () => {
    console.log(`user: ${JSON.stringify(loggedInUser)}`)
    console.log(`cart items: ${JSON.stringify(itemsInCart)}`)

    let cartDetails = {
      cart: itemsInCart,
      userId: loggedInUser._id
    }

    dispatchAction(saveItemsToCart(cartDetails))
    console.log("after dispatching save cart items");
    navigate('/checkout');
  }

  return (
    <>
      { itemsInCart && itemsInCart.length > 0 ? 
        <div>
          <table className='my-5 ml-3'>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Rating</th>
            </tr>
            { itemsInCart.map((productItem)=> {
                return (
                  <tr>  
                    <td>{productItem.name}</td>
                    <td>{productItem.price}</td>
                    <td>{productItem.qty}</td>
                    <td>{productItem.rating}</td>
                  </tr>
                )
              })
            }
          </table>
            <input type="button" className={"m-3 btn btn-primary col-md-2"} 
              value={"Save To Checkout"} 
              onClick={saveCartItems} />
        </div>
      : <h4>No Products To Display</h4>
      }
    </>
  )
}

export default CartComponentPractice