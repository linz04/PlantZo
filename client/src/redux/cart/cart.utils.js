export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToAdd.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === cartItemToAdd.pid
        ? { ...cartItem, quantityDesired: cartItem.quantityDesired + 1 }
        : cartItem
    );
  }

  return [
    ...cartItems,
    { ...cartItemToAdd, quantityDesired: 1, checked: false },
  ];
};

export const addItemAndQuantityToCart = (cartItems, itemAndQuantity) => {
  const { item, itemQuantity } = itemAndQuantity;
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === item.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === item.pid
        ? {
            ...cartItem,
            quantityDesired: cartItem.quantityDesired + itemQuantity,
          }
        : cartItem
    );
  }

  return [
    ...cartItems,
    {
      ...item,
      quantityDesired: itemQuantity,
      checked: false,
      state: 0,
    },
  ];
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
  const checkedAll = cartItems.filter((cartItem) => cartItem.checked === true);

  if (cartItems.length === checkedAll.length) {
    return cartItems.map((cartItem) => ({
      ...cartItem,
      checked: false,
    }));
  }

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
        ? { ...cartItem, quantityDesired: cartItem.quantityDesired + 1 }
        : cartItem
    );
  }

  return [
    ...cartItems,
    { ...cartItemToAdd, quantityDesired: 1, checked: false },
  ];
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToDecrease.pid
  );

  if (existingCartItem.quantityDesired === 1) {
    return deleteItemFromCart(cartItems, cartItemToDecrease);
  }

  return cartItems.map((cartItem) =>
    cartItem.pid === cartItemToDecrease.pid
      ? {
          ...cartItem,
          quantityDesired: cartItem.quantityDesired - 1,
          checked: false,
        }
      : cartItem
  );
};

export const stateItemToNext = (cartItems, cartItemToNext) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.pid === cartItemToNext.pid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.pid === cartItemToNext.pid
        ? { ...cartItem, state: cartItem.state + 1 }
        : cartItem
    );
  }

  return cartItems;
};

export const stateItemsToNext = (cartItems) => {
  const existingCartItem = cartItems.filter(
    (cartItem) => cartItem.checked === true
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => ({
      ...cartItem,
      state: cartItem.state + 1,
    }));
  }

  return cartItems;
};
