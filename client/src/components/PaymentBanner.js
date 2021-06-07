import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentType } from "../redux/cart/cart.actions";
import { selectPaymentType } from "../redux/cart/cart.selectors";

const PaymentBanner = ({ imageUrl, value, size }) => {
  const paymentType = useSelector((state) => selectPaymentType(state));

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        paymentType === value ? "" : "opacity-50"
      } flex items-center h-64 cursor-pointer relative`}
      onClick={(e) => {
        dispatch(setPaymentType(e.target.attributes[3].value));
      }}
    >
      <img
        src={imageUrl}
        className={`${
          size === "large" ? "w-full h-full text-center" : "w-1/6"
        }`}
        alt="payment banner"
        value={value}
      />
    </div>
  );
};

export default PaymentBanner;
