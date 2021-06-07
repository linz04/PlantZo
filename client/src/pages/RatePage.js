import React from "react";
import { useSelector } from "react-redux";
import UnPaidItem from "../components/UnPaidItem";
import { selectCartItemsInRate } from "../redux/cart/cart.selectors";

const RatePage = () => {
  const inRateItems = useSelector((state) => selectCartItemsInRate(state));

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col justify-center items-center flex-auto">
        {inRateItems.length === 0 ? (
          <div className="flex justify-center items-center flex-1">
            <p className="text-5xl">Tidak ada barang yang perlu dinilai</p>
          </div>
        ) : (
          inRateItems.map((unPaidItem) => (
            <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default RatePage;
