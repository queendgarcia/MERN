import * as ActionTypes from "../actionTypes";
import axios from "axios";
import { saveCancelledOrder } from "../CancelledOrders/cancelledOrdersAction";

const ordersUrl = `http://localhost:9000/orders`;

export const AddOrdersToStore = (orders) => ({
  type: ActionTypes.ADD_ORDERS_TO_STORE,
  payload: orders
})

export const RemoveOrderFromStore = (orderId) => ({
  type: ActionTypes.REMOVE_ORDER_FROM_STORE,
  payload: {orderId}
})

export const saveOrder = (order)=>{
  console.log("Order ", order);

  return function (dispatch) {
    axios.post(`${ordersUrl}/api/saveOrder`,
      order
    )
    .then((res)=>{
      let orderResponse = res.data;
      console.log("order save response ", orderResponse);
      
    })
    .catch((err)=>{
      console.log("Error While Saving Order", err)
    })
  }
};

export const fetchOrders = (userId)=>{
  console.log("Product ");
  console.log("from fetch orders action", userId)

  return function (dispatch) {
    axios.get(`${ordersUrl}/api/getOrders?userId=${userId}`)
    .then((orders)=>{
      debugger;
      console.log("get orders response ", orders);
      dispatch(AddOrdersToStore(orders.data))
    })
    .catch((err)=>{
      console.log("Error While Fetching Orders", err)
    })
  }
};

export const cancelOrder = (order) => {
  debugger;
  return function(dispatch) {
    axios.delete(`${ordersUrl}/api/cancelOrder?orderId=${order._id}`)
    .then((data) => {
      console.log("cancelled order", data);
      dispatch(RemoveOrderFromStore(order._id));
      dispatch(saveCancelledOrder(order));
    })
    .catch((err)=>{
      console.log("Error While Cancelling Order", err)
    })
  }
  
}
