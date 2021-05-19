import { deleteItem } from "./cart.actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToAdd.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === cartItemToAdd.pid
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1, checked: false }];
};

export const deleteItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.pid !== cartItemToClear.pid);
};

export const checkedItem = (cartItems, cartItemToChecked) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToChecked.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === cartItemToChecked.pid
        ? { ...cartItem, checked: !cartItem.checked }
        : cartItem
    );
  }

  return { ...cartItemToChecked, checked: false };
};

export const checkedAllItems = (cartItems) => {
  cartItems.map((cartItem) => (cartItem.checked = false));

  return cartItems.map((cartItem) => ({
    ...cartItem,
    checked: true,
  }));
};

export const increaseItemQuantity = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToAdd.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === cartItemToAdd.pid
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToDecrease.pid
  );

  if (existingCartItem.quantity === 1) {
    return deleteItemFromCart(cartItems, cartItemToDecrease);
  }

  return cartItems.map((cartItem) =>
    cartItem.pid === cartItemToDecrease.pid
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
