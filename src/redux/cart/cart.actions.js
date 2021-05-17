import { cartActionTypes } from "./cart.types";

const { ADD_ITEM } = cartActionTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
