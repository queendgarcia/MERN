import * as ActionTypes from "../actionTypes";

const Initial_State = {
  Static: ["Add Products", "Modify Cart", "Review Checkout Page", "Make Payment",
    "Reorder or Cancel Orders"],
  Dynamic: [], 
  Count: 5,
  StaticCount: 5
}

let NotificationsReducer = (state = Initial_State, action) => {
  debugger;
  switch(action.type) {
    case ActionTypes.ADD_NOTIFICATION_TO_STORE :
      return { ...state, Dynamic : [...state.Dynamic, action.payload], Count: state.Count+1 }   

    case ActionTypes.REMOVE_DYNAMIC_NOTIFICATION_FROM_STORE :
      let newDynamic = (state.Dynamic).filter(notif => notif != action.payload)  
      return { ...state, Dynamic: newDynamic, Count: state.Count-1}
    
    case ActionTypes.REMOVE_STATIC_NOTIFICATION_FROM_STORE :
      // let newStatic = (state.Static).filter(notif => notif != action.payload)  
      if (state.StaticCount < 1)  return { ...state, Count: state.Count}
      else return { ...state, Count: state.Count-1, StaticCount: state.StaticCount-1}
    default: 
      return state
  }
}

export default NotificationsReducer;