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

export const selectItemStateNumberToString = ["UNPAID", "PACK", "SEND", "RATE"];

export const selectCartItemsInUnPaid = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.filter(
      (cartItem) => selectItemStateNumberToString[cartItem.state] === "UNPAID"
    )
);

export const selectCartItemsInUnPaidQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .filter(
        (cartItem) => selectItemStateNumberToString[cartItem.state] === "UNPAID"
      )
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantityDesired,
        0
      )
);

export const selectCartItemsInPack = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.filter(
      (cartItem) => selectItemStateNumberToString[cartItem.state] === "PACK"
    )
);

export const selectCartItemsInPackQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .filter(
        (cartItem) => selectItemStateNumberToString[cartItem.state] === "PACK"
      )
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantityDesired,
        0
      )
);

export const selectCartItemsInSend = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.filter(
      (cartItem) => selectItemStateNumberToString[cartItem.state] === "SEND"
    )
);

export const selectCartItemsInSendQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .filter(
        (cartItem) => selectItemStateNumberToString[cartItem.state] === "SEND"
      )
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantityDesired,
        0
      )
);

export const selectCartItemsInRate = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.filter(
      (cartItem) => selectItemStateNumberToString[cartItem.state] === "RATE"
    )
);

export const selectCartItemsInRateQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems
      .filter(
        (cartItem) => selectItemStateNumberToString[cartItem.state] === "RATE"
      )
      .reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantityDesired,
        0
      )
);

export const selectTransactionId = createSelector(
  [selectCart],
  (cart) => cart.transactionId
);
