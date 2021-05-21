import React from "react";
import { useDispatch } from "react-redux";

import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "../redux/cart/cart.actions";

const CartItem = ({ item = {} }) => {
  const {
    imageUrl = "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name = "JUDUL",
    price = 1,
    quantity = 2,
  } = item;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between h-56 w-full">
      <div className="w-2/6">
        <img src={imageUrl} alt="Item" className="h-full w-2/3" />
      </div>
      <div className="flex flex-col justify-center items-center w-2/6 space-y-6">
        <div>{name}</div>
        <div className="font-black">{`Rp ${price}.000`}</div>
        <div className="flex space-x-4 border-2 border-gray-500">
          <div
            className="w-8 text-center"
            onClick={() => {
              dispatch(decreaseItemQuantity(item));
            }}
          >
            -
          </div>
          <span>{quantity}</span>
          <div
            className="w-8 text-center"
            onClick={() => dispatch(increaseItemQuantity(item))}
          >
            +
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-green-800 w-1/6"
        onClick={() => dispatch(deleteItem(item))}
      >
        Hapus
      </div>
    </div>
  );
};

export default CartItem;
