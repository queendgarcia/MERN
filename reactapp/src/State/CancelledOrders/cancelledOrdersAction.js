import * as ActionTypes from "../actionTypes";
import axios from "axios";

const ordersUrl = `http://localhost:9000/orders`;

export const AddCancelledOrdersToStore = (orders) => ({
  type: ActionTypes.ADD_CANCELLED_ORDERS_TO_STORE,
  payload: orders
})

export const RemoveCancelledOrderFromStore = (orderId) => ({
  type: ActionTypes.REMOVE_CANCELLED_ORDER_FROM_STORE,
  payload: {orderId}
})

export const fetchCancelledOrders = (userId)=>{
  console.log("from fetch cancelled orders action", userId)

  return function (dispatch) {
    axios.get(`${ordersUrl}/api/getCancelledOrders?userId=${userId}`)
    .then((orders)=>{
      debugger;
      console.log("get cancelled orders response ", orders);
      dispatch(AddCancelledOrdersToStore(orders.data))
    })
    .catch((err)=>{
      console.log("Error While Fetching Orders", err)
    })
  }
};

export const saveCancelledOrder = (cancelledOrder)=>{
  console.log("cancelledOrder ", cancelledOrder);

  return function (dispatch) {
    axios.post(`${ordersUrl}/api/saveCancelledOrder`,
    cancelledOrder
    )
    .then((res)=>{
      let orderResponse = res.data;
      console.log("saving cancelled order response ", orderResponse);
      
    })
    .catch((err)=>{
      console.log("Error While Saving Cancelled Order", err)
    })
  }
};

// export const removeCancelledOrder = (order) => {
//   debugger;
//   return function(dispatch) {
//     axios.delete(`${ordersUrl}/api/cancelOrder?orderId=${order._id}`)
//     .then((data) => {
//       console.log("cancelled order", data);
//       dispatch(RemoveOrderFromStore(order._id));
//     })
//     .catch((err)=>{
//       console.log("Error While Cancelling Order", err)
//     })
//   }
  
// }