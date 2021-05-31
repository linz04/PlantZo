import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPaymentType } from "../redux/cart/cart.actions";

import { selectPaymentType } from "../redux/cart/cart.selectors";

const PaymentBanner = ({ imageUrl, value }) => {
  const paymentType = useSelector((state) => selectPaymentType(state));

  const dispatch = useDispatch();

  return (
    <div
      className={`${
        paymentType === value ? "" : "opacity-50"
      } flex justify-center items-center h-64 cursor-pointer relative`}
      onClick={(e) => {
        dispatch(setPaymentType(e.target.attributes[3].value));
      }}
    >
      <img
        src={imageUrl}
        className="w-full h-full"
        alt="payment banner"
        value={value}
      />
    </div>
  );
};

export default PaymentBanner;
