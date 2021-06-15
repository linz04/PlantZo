import { shopActionTypes } from "./shop.types";

const {
  SET_SHOP_ITEMS,
  SET_DEFAULT_QUANTITY_DESIRED,
  SET_DEFAULT_CHECKED,
  SET_DEFAULT_SOLD,
  SET_DEFAULT_STATE,
  SET_COMMENTS,
  SET_DATE,
} = shopActionTypes;

export const setShopItems = (items) => ({
  type: SET_SHOP_ITEMS,
  payload: items,
});

export const setDefaultQuantityDesired = () => ({
  type: SET_DEFAULT_QUANTITY_DESIRED,
});

export const setDefaultChecked = () => ({
  type: SET_DEFAULT_CHECKED,
});

export const setDefaultSold = () => ({
  type: SET_DEFAULT_SOLD,
});

export const setDefaultState = () => ({
  type: SET_DEFAULT_STATE,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});
