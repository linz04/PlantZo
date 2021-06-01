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

export const selectPaymentType = createSelector(
  [selectCart],
  (cart) => cart.paymentType
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
//
export const selectCartItemsInUnPaid = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.filter((cartItem) => cartItem.state.unpaid === true)
);

export const selectCartItemsInPack = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.filter((cartItem) => cartItem.state.pack === true)
);

export const selectCartItemsInSend = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.filter((cartItem) => cartItem.state.send === true)
);

export const selectCartItemsInRate = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.filter((cartItem) => cartItem.state.rate === true)
);

export const selectCartItemsInUnPaidQuantity = createSelector(
  [selectCartItemsInUnPaid],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantityDesired,
      0
    )
);

export const selectCartItemsInPackQuantity = createSelector(
  [selectCartItemsInPack],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantityDesired,
      0
    )
);

export const selectCartItemsInSendQuantity = createSelector(
  [selectCartItemsInSend],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantityDesired,
      0
    )
);

export const selectCartItemsInRateQuantity = createSelector(
  [selectCartItemsInRate],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantityDesired,
      0
    )
);

export const selectItemStateNumberToString = ["UNPAID", "PACK", "SEND", "RATE"];
