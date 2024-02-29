import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

// import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import UserReducer from "./User/userReducer";
import StudentReducer from "./Student/studentReducer"
import ProductReducer from "./Product/productReducer";
import CartReducer from "./Cart/cartReducer";
import CouponReducer from "./Coupon/couponReducer";
import RecentOrdersReducer from "./RecentOrders/recentOrdersReducer";
import CancelledOrdersReducer from "./CancelledOrders/cancelledOrdersReducer";
import ItemReviewsReducer from "./Reviews/itemReviewsReducer";
import NotificationsReducer from "./Notifications/notificationsReducer";

import CartReducerPractice from "./CartPractice/cartReducer";

// combineReducers --> used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({
  UserReducer,
  StudentReducer,
  ProductReducer,
  CartReducer,
  CouponReducer,
  RecentOrdersReducer,
  CancelledOrdersReducer,
  ItemReviewsReducer,
  NotificationsReducer
  // CartReducerPractice
  // UserReducer : UserReducer  // state.UserReducer.User.userName
})

// create or configure and export the store from this code
export default configureStore(
  { reducer : rootReducer },
  {}, // initial state if we want to set from store instead of reducer
  // applyMiddleware(thunk)
)

// Redux 
// 1. Store - is centralized data source for react app, combination of multiple states
// 2. Reducers/Callbacks - initialize state(ex. userState) and write functions/reducers to create new state upon actions which takes in action types and payload
// 3. Action - is an object that contains actionType(what to do - addProduct) and payload (product data in json)