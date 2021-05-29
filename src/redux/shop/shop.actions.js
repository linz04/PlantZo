import { shopActionTypes } from "./shop.types";

const { SET_SHOP_ITEMS, SET_DEFAULT_QUANTITY_DESIRED, SET_DEFAULT_CHECKED } =
  shopActionTypes;

export const setShopItems = () => ({
  type: SET_SHOP_ITEMS,
});

export const setDefaultQuantityDesired = () => ({
  type: SET_DEFAULT_QUANTITY_DESIRED,
});

export const setDefaultChecked = () => ({
  type: SET_DEFAULT_CHECKED,
});
