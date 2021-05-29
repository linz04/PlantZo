import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "../redux/cart/cart.actions";

const CartItem = ({ item }) => {
  const { name, image: imageUrl, price, quantityDesired } = item;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between h-56 w-full">
      <div className="w-2/6">
        <img src={imageUrl} alt="Item" className="h-full w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center w-2/6 space-y-6">
        <div className="text-5xl font-light">{name}</div>
        <div className="font-gray-800 text-4xl">{`Rp ${price}.000`}</div>
        <div className="flex space-x-4 border-2 border-gray-500">
          <div
            className="w-8 text-center cursor-pointer"
            onClick={() => {
              dispatch(decreaseItemQuantity(item));
            }}
          >
            -
          </div>
          <span>{quantityDesired}</span>
          <div
            className="w-8 text-center cursor-pointer"
            onClick={() => dispatch(increaseItemQuantity(item))}
          >
            +
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-green-800 w-1/6 text-white cursor-pointer"
        onClick={() => dispatch(deleteItem(item))}
      >
        Hapus
      </div>
    </div>
  );
};

export default CartItem;
