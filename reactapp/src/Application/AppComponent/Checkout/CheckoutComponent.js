import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartComponent from '../Cart/CartComponent'

const CheckoutComponent = () => {
  let [paymentDone, setPaymentDone] = useState(false);
  let loggedInUser = useSelector((state) => state.UserReducer.User)
  debugger;
  // let dispatchAction = useDispatch();

  let proceedToPayment = () => {
    console.log("proceedToPayment");
    setPaymentDone(true);
  }

  return (
    <>
      {
        loggedInUser._id  ? 
          <>
            { paymentDone ? <h2>Thankyou for the payment, your items under process!</h2>
              :
              <> 
                <div className='user-details ml-3'>
                  <h2>User Details</h2>
                  <h5>Name: {loggedInUser.userName}</h5>
                  <h5>Products will be delivered here: {loggedInUser.street}</h5>
                </div>
                <CartComponent readOnly={true} />
                <button className="m-3 btn btn-primary col-md-2" 
                  onClick={proceedToPayment} >
                  Proceed to Payment
                </button>
              </>
            }
          </>
        : <h3>Add Products to Cart</h3>
      }
    </>
  )
  // return (
  //   <>
  //     { itemsInCart && itemsInCart.length > 0 ? 
  //       <div>
  //         <table className='my-5 ml-3'>
  //           <tr>
  //             <th>Name</th>
  //             <th>Price</th>
  //             <th>Qty</th>
  //             <th>Rating</th>
  //           </tr>
  //           { itemsInCart.map((productItem)=> {
  //               return (
  //                 <tr>  
  //                   <td>{productItem.name}</td>
  //                   <td>{productItem.price}</td>
  //                   <td>{productItem.qty}</td>
  //                   <td>{productItem.rating}</td>
  //                 </tr>
  //               )
  //             })
  //           }
  //         </table>
  //         <input type="button" className={"m-3 btn btn-primary col-md-2"} 
  //             value={"Proceed to Payment"} />
  //       </div>
  //     : <h4>No Products To Display</h4>
  //     }
  //   </>
  // )
}

export default CheckoutComponent