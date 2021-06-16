import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RateItem from "../components/RateItem";
import { selectCartItemsInRate } from "../redux/cart/cart.selectors";

const RatePage = () => {
  const [rateNumber, setRateNumber] = useState(0);
  const [commencts, setCommencts] = useState("");
  const inRateItems = useSelector((state) => selectCartItemsInRate(state));

  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col justify-center items-center flex-auto">
        {!inRateItems.length === 0 ? (
          <div className="flex justify-center items-center flex-1">
            <p className="text-5xl">Tidak ada barang yang perlu dinilai</p>
          </div>
        ) : (
          <>
            {inRateItems.map((unPaidItem) => (
              <RateItem key={unPaidItem.pid} item={unPaidItem} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RatePage;
