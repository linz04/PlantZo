import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CardItem from "../components/CardItem";
import CollectionItem from "../components/CollectionItem";
import { selectCartItems } from "../redux/cart/cart.selectors";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  console.log(cartItems);

  return (
    <CollectionItem>
      {cartItems
        .sort((item1, item2) => item2.pid - item1.pid)
        .filter((item, idx) => idx < 6)
        .map((item) => (
          <CardItem key={item.pid} item={item} />
        ))}
    </CollectionItem>
  );
};

export default CheckoutPage;
