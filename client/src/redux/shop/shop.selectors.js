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

export const selectDate = createSelector([selectShop], (shop) => shop.date);
