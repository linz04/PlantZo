import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnPaidItem from "../components/UnPaidItem";
import { stateItemsToNext } from "../redux/cart/cart.actions";
import { selectCartItemsInSend } from "../redux/cart/cart.selectors";

const SendPage = () => {
  const inSendItems = useSelector((state) => selectCartItemsInSend(state));

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(stateItemsToNext());
    }, 5000);
  }, []);

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
