import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const CheckoutComponentPractice = () => {

  let itemsInCart = useSelector((state) => state.CartReducerPractice.CartItems)
  let loggedInUser = useSelector((state) => state.UserReducer.User)

  let dispatchAction = useDispatch();

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
              value={"Proceed to Payment"} />
        </div>
      : <h4>No Products To Display</h4>
      }
    </>
  )
}

export default CheckoutComponentPractice