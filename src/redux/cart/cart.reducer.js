import { cartActionTypes } from "./cart.types";
import {
  addItemToCart,
  checkedAllItems,
  checkedItem,
  decreaseItemQuantity,
  deleteItemFromCart,
  increaseItemQuantity,
} from "./cart.utils";

const {
  ADD_ITEM,
  DELETE_ITEM,
  CHECKED_ITEM,
  CHECKED_ALL_ITEM,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
} = cartActionTypes;

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
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    case CHECKED_ITEM:
      return {
        ...state,
        cartItems: checkedItem(state.cartItems, action.payload),
      };
    case CHECKED_ALL_ITEM:
      return {
        ...state,
        cartItems: checkedAllItems(state.cartItems),
      };
    case INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload),
      };
    case DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
