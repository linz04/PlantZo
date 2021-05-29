import React from "react";

const CheckoutItem = ({ item }) => {
  const { name, description, image: imageUrl, price, quantityDesired } = item;

  return (
    <>
      <div className="flex justify-between h-56 m-4 pt-4">
        <div className="w-1/5 pl-10">
          <img src={imageUrl} alt="Item" className="h-full" />
        </div>

        <div className="flex flex-col justify-between w-2/5 text-xl">
          <div className="text-5xl">{name}</div>
          <div className="text-gray-400">{description}</div>
          <div className="text-3xl font-light">
            Kuantitas {quantityDesired} x Rp {price}.000
          </div>
        </div>
        <div className="flex flex-col justify-end justify-aroundtext-3xl w-1/5 text-4xl">
          Rp {quantityDesired * price}.000
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-800" />
    </>
  );
};

export default CheckoutItem;
