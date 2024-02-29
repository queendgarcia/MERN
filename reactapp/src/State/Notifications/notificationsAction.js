import * as ActionTypes from "../actionTypes";

export const addNotificationToStore = (notification) => {
  return {
    type: ActionTypes.ADD_NOTIFICATION_TO_STORE,
    payload: notification
  }
}

export const removeDynamicNotificationToStore = (notification) => {
  return {
    type: ActionTypes.REMOVE_DYNAMIC_NOTIFICATION_FROM_STORE,
    payload: notification
  }
}

export const removeStaticNotificationToStore = (notification) => {
  return {
    type: ActionTypes.REMOVE_STATIC_NOTIFICATION_FROM_STORE,
    payload: notification
  }
}