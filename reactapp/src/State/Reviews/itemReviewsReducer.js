import * as ActionTypes from "../actionTypes";

const Initial_State = [];

export default function ItemReviewsReducer(state = Initial_State, action ) {
  console.log("cancelled orders reducer", state, action);
  debugger;
  switch(action.type) {
    case ActionTypes.GET_ITEM_REVIEWS :
      return action.payload 
    default:
      return state;
  }
}

