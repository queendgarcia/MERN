
let Initial_State = {
  CartItems: []
}

let CartReducer = (state = Initial_State, action) => {
  // debugger;
  switch (action.type) {
    case "ADD_ITEM_TO_CART" :
      return {...state, CartItems: [...state.CartItems, action.payload.product] }
    default:
      return state
  }
}

export default CartReducer;