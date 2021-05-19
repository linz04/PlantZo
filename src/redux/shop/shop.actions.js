import { shopActionTypes } from "./shop.types";

const { SET_SHOP_ITEMS } = shopActionTypes;

export const setShopItems = () => ({
  type: SET_SHOP_ITEMS,
});
