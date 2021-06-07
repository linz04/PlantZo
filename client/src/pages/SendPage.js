import React from "react";
import { useSelector } from "react-redux";
import UnPaidItem from "../components/UnPaidItem";
import { selectCartItemsInSend } from "../redux/cart/cart.selectors";

const SendPage = () => {
  const inSendItems = useSelector((state) => selectCartItemsInSend(state));

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col justify-center items-center flex-auto">
        {inSendItems.length === 0 ? (
          <div className="flex justify-center items-center flex-1">
            <p className="text-5xl">
              Tidak ada barang yang sedang dalam pengiriman
            </p>
          </div>
        ) : (
          inSendItems.map((unPaidItem) => (
            <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default SendPage;
