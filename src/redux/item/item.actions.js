import { itemActionTypes } from "./item.types";

const { INCREASE_QUANTITY, DECREASE_QUANTITY } = itemActionTypes;

export const increaseQuantityItem = (item) => ({
  type: INCREASE_QUANTITY,
  payload: item.quantity,
});

export const decreaseQuantityItem = (item) => ({
  type: DECREASE_QUANTITY,
  payload: item.quantity,
});
