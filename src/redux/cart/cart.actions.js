import { cartActionTypes } from "./cart.types";

const {
  ADD_ITEM,
  DELETE_ITEM,
  CHECKED_ITEM,
  CHECKED_ALL_ITEM,
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
} = cartActionTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const checkedItem = (item) => ({
  type: CHECKED_ITEM,
  payload: item,
});

export const checkedAllItems = () => ({
  type: CHECKED_ALL_ITEM,
});

export const increaseItemQuantity = (item) => ({
  type: INCREASE_ITEM_QUANTITY,
  payload: item,
});

export const decreaseItemQuantity = (item) => ({
  type: DECREASE_ITEM_QUANTITY,
  payload: item,
});
