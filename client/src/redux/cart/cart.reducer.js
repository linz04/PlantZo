import { cartActionTypes } from "./cart.types";
import {
  addItemAndQuantityToCart,
  addItemToCart,
  checkedAllItems,
  checkedItem,
  decreaseItemQuantity,
  deleteItemFromCart,
  increaseItemQuantity,
  stateItemsToNext,
} from "./cart.utils";

const {
  ADD_ITEM,
  ADD_ITEM_WITH_QUANTITY,
  DELETE_ITEM,
  DELETE_ALL_ITEM,
  CHECKED_ITEM,
  CHECKED_ALL_ITEM,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  SET_DELIVERY_TYPE,
  SET_PAYMENT_TYPE,
  STATE_ITEM_TO_NEXT,
  STATE_ITEMS_TO_NEXT,
  FINISHED_TRANSACTION,
} = cartActionTypes;

const INITIAL_STATE = {
  cartItems: [],
  deliveryType: [],
  paymentType: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ADD_ITEM_WITH_QUANTITY:
      return {
        ...state,
        cartItems: addItemAndQuantityToCart(state.cartItems, action.payload),
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state.cartItems, action.payload),
      };
    case DELETE_ALL_ITEM:
      return {
        ...state,
        cartItems: [],
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
    case SET_DELIVERY_TYPE:
      return {
        ...state,
        deliveryType: action.payload,
      };
    case SET_PAYMENT_TYPE:
      return {
        ...state,
        paymentType: action.payload,
      };
    case STATE_ITEM_TO_NEXT:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, state: action.payload++ },
        ],
      };
    case STATE_ITEMS_TO_NEXT:
      return {
        ...state,
        cartItems: stateItemsToNext(state.cartItems),
      };
    case FINISHED_TRANSACTION:
      return {
        ...state,
        cartItems: [],
        deliveryType: [],
        paymentType: "",
      };
    default:
      return state;
  }
};

export default cartReducer;
