import { cartActionTypes } from "./cart.types";

const { ADD_ITEM, CLEAR_ITEM_FROM_CART } = cartActionTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
