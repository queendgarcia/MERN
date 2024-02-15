//This file defines all the action types to be used in various actions and reducers

export const AddUserToStore = "USER.ADDUSERTOSTORE";
export const REMOVE_USER_FROM_STORE = "USER.REMOVE_USER_FROM_STORE";
//Product Action Types
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

// For Coupon Code
export const ADD_COUPON = "COUPON.ADD_COUPON";

// For Recent Orders
export const ADD_ORDERS_TO_STORE = "ORDERS.ADD_ORDERS_TO_STORE";
export const SAVE_ORDER = "ORDERS.SAVE_ORDER";
export const REMOVE_ORDER_FROM_STORE = "ORDERS.REMOVE_ORDER_FROM_STORE"
export const ADD_CANCELLED_ORDERS_TO_STORE = "ORDERS.ADD_CANCELLED_ORDERS_TO_STORE";
export const REMOVE_CANCELLED_ORDER_FROM_STORE = "ORDERS.REMOVE_CANCELLED_ORDER_FROM_STORE"

// For Item Reviews
export const SAVE_REVIEW = "REVIEWS.SAVE_REVIEW";
export const GET_ITEM_REVIEWS = "REVIEWS.GET_ITEM_REVIEWS";