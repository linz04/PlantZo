import { cartActionTypes } from "./cart.types";

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

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const addItemWithQuantity = (itemAndQuantity) => ({
  type: ADD_ITEM_WITH_QUANTITY,
  payload: itemAndQuantity,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const deleteAllItem = () => ({
  type: DELETE_ALL_ITEM,
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

export const setDeliveryType = (delivery) => ({
  type: SET_DELIVERY_TYPE,
  payload: delivery,
});

export const setPaymentType = (payment) => ({
  type: SET_PAYMENT_TYPE,
  payload: payment,
});

export const stateItemToNext = (item) => ({
  type: STATE_ITEM_TO_NEXT,
  payload: item,
});

export const stateItemsToNext = () => ({
  type: STATE_ITEMS_TO_NEXT,
});

export const finishedTransaction = () => ({
  type: FINISHED_TRANSACTION,
});
