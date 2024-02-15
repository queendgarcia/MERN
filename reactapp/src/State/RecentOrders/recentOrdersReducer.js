import * as ActionTypes from "../actionTypes";

const Initial_State = [];

export default function RecentOrdersReducer(state = Initial_State, action ) {
  console.log("orders reducer", state, action);

  switch(action.type) {
    case ActionTypes.ADD_ORDERS_TO_STORE :
      return action.payload
    case ActionTypes.REMOVE_ORDER_FROM_STORE :
      return state.filter(order => order._id != action.payload.orderId)   
    default:
      return state;
  }
}

