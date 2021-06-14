import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.items
);

export const selectComments = createSelector(
  [selectShop],
  (shop) => shop.comments
);
