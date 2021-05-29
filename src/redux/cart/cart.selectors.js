import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectDeliveryType = createSelector(
  [selectCart],
  (cart) => cart.deliveryType
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantityDesired,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .filter((cartItem) => cartItem.checked === true)
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantityDesired * cartItem.price,
        0
      )
);

export const selectCartItemsChecked = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.filter((cartItem) => cartItem.checked === true)
);
