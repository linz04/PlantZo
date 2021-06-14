import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../redux/cart/cart.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";

const CartItem = ({ item }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { name, image: imageUrl, price, quantityDesired, quantity, pid } = item;

  const { uid } = currentUser;

  const dispatch = useDispatch();

  const handleIncreaseButton = () => {
    if (quantityDesired < quantity) dispatch(increaseItemQuantity(item));
  };

  const handleDeleteItemClick = () => {
    axios.post("/cart-delete", { uid, pid });
    dispatch(deleteItem(item));
  };

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
            className="flex justify-center items-center w-12 text-center cursor-pointer"
            onClick={() => {
              dispatch(decreaseItemQuantity(item));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </div>
          <span>{quantityDesired}</span>
          <div
            className="flex justify-center items-center w-12 text-center cursor-pointer"
            onClick={handleIncreaseButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-green-900 w-1/6 text-white cursor-pointer"
        onClick={handleDeleteItemClick}
      >
        Hapus
      </div>
    </div>
  );
};

export default CartItem;
