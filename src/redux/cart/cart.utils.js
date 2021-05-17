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

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  cartItems.filter((cartItem) => cartItem.pid !== cartItemToClear.pid);
};
