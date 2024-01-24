import * as ActionTypes from "../actionTypes";

const Initial_State = {
  Product: {
    name: "",
    desc: "",
    rating: "",
    price: 0
  },
  Products: []
}

let ProductReducer = (state = Initial_State, action) => {
  switch(action.type) {
    case ActionTypes.ADD_PRODUCTS_TOSTORE :
      //..state - products[] and defaultProduct
      return { ...state, Products : action.payload.products } 
      //we update products and then retrun a new state
    default:
      return state
  }
}

export default ProductReducer;