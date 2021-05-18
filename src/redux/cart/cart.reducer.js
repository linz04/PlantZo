import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
const { ADD_ITEM, CLEAR_ITEM_FROM_CART } = cartActionTypes;

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.pid !== action.payload.pid
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
