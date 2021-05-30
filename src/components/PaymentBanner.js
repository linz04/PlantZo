import React, { useState } from "react";

const PaymentBanner = ({ handleClick, imageUrl, value }) => {
  const [paymentClicked, setPaymentClicked] = useState(false);

  return (
    <div
      className={`${
        paymentClicked ? "" : "opacity-50"
      } flex justify-center items-center h-64 cursor-pointer`}
      value={value}
      onClick={(e) => {
        handleClick(e);
        setPaymentClicked(!paymentClicked);
      }}
    >
      <img src={imageUrl} className="w-full h-full" />
    </div>
  );
};

export default PaymentBanner;
