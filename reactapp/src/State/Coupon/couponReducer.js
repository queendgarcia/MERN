import * as ActionTypes from '../actionTypes';

const Initial_State = {
  Coupon: {
    code: ""
  }
}

let CouponReducer = (state = Initial_State, action) => {

  switch (action.type) {
    case  ActionTypes.ADD_COUPON :
      return {...state, Coupon : action.payload}
    default:
      return state
  }
}

export default CouponReducer;