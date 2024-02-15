import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartComponent from '../Cart/CartComponent'
import { useNavigate } from 'react-router-dom';
import { saveOrder, fetchOrders } from '../../../State/RecentOrders/recentOrdersAction';

const CheckoutComponent = () => {
  let [paymentDone, setPaymentDone] = useState(false);
  let loggedInUser = useSelector((state) => state.UserReducer.User)
  let coupon = useSelector((state) => state.CouponReducer.Coupon)
  let cart = useSelector((state)=>state.CartReducer)
  debugger;
  let dispatchAction = useDispatch();

  let proceedToPayment = () => {
    console.log("proceedToPayment");
    let order = {
      userId: loggedInUser._id,
      cart
    }
    dispatchAction(saveOrder(order));
    // dispatchAction(fetchOrders(loggedInUser._id))
    setPaymentDone(true);
  }

  let navigate = useNavigate();

  let getDiscountCode = (evt)=>{
    navigate('/coupon');
    evt.preventDefault();
  }

  return (
    <>
      {
        loggedInUser._id  ? 
          <>
            { paymentDone ? <h2>Thank you for the payment, your items are in progress</h2>
              :
              <> 
                <div className='user-details ml-3'>
                  <h2>User Details</h2>
                  <h5>Name: {loggedInUser.userName}</h5>
                  <h5>Products will be delivered here: {loggedInUser.street}</h5>
                </div>
                <CartComponent readOnly={true} />
                {
                  coupon.code ? 
                  <>
                    <p className='m-3'>Coupon Code (10% discount): {coupon.code} </p>
                  </>
                  :
                  <>
                    <p className='m-3'>You can get a discount code in Coupon Page</p>
                    <button className="m-3 btn btn-primary col-md-2" 
                      onClick={getDiscountCode} >
                      Get Discount Code
                    </button>
                  </>

                }
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
}

export default CheckoutComponent