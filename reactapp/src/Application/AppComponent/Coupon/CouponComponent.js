import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCouponToStore } from '../../../State/Coupon/couponAction';

const CouponComponent = () => {
  let [couponCode, setCouponCode] = useState("");
  let couponStore = useSelector((state) => state.CouponReducer.Coupon)
  let dispatchAction = useDispatch();

  let generateCouponCode = () => {
    let code = Math.random().toString().slice(2, 8);
    console.log("generated coupon: " + code);
    setCouponCode(code);
    let coupon = { code }
    dispatchAction(AddCouponToStore(coupon));
  }

  console.log(couponStore);

  return (
    <div className="ml-3">
      <h2>Coupon Page</h2>
      { 
        couponCode ? 
        <h2>Code: {couponCode}</h2>
        :
        <></>
      }
      <button onClick={generateCouponCode}>Generate Coupon</button>
    </div>

  )
}

export default CouponComponent