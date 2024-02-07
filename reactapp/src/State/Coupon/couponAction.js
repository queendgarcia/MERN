import * as ActionTypes from "../actionTypes";

export const AddCouponToStore = (code)=>{
	return {
		type : ActionTypes.ADD_COUPON,
		payload : code
	}
}