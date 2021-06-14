import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UnPaidItem from "../components/UnPaidItem";
import { stateItemsToNext, stateItemToNext } from "../redux/cart/cart.actions";
import { selectCartItemsInPack } from "../redux/cart/cart.selectors";

const PackPage = () => {
  const inPackItems = useSelector((state) => selectCartItemsInPack(state));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (inPackItems.length !== 0) {
  //     handleToNextBaseOnTime(inPackItems);
  //   }
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(stateItemsToNext());
    }, 5000);
  }, []);

  const handleToNextBaseOnTime = (items) => {
    const expensiveItems = items.filter((item) => item.price > 50);
    const cheapItems = items.filter(
      (item) => item.price <= 50 && item.price > 0
    );

    console.log(expensiveItems, cheapItems);

    const classToTime = {
      // cheapItems: 600000,
      // expensiveItems: 1800000,
      expensiveItems: 10000,
      cheapItems: 5000,
    };

    if (expensiveItems.length !== 0 && expensiveItems !== null) {
      setTimeout(() => {
        expensiveItems.map((item) => dispatch(stateItemToNext([1, 2, 3])));
      }, classToTime.expensiveItems);
    }

    if (cheapItems.length !== 0 && cheapItems !== null) {
      setTimeout(() => {
        cheapItems.map((item) => dispatch(stateItemToNext([1, 2, 3])));
      }, classToTime.cheapItems);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col justify-center items-center flex-auto">
        {inPackItems.length === 0 ? (
          <div className="flex justify-center items-center ">
            <p className="text-5xl">Tidak ada barang yang sedang dikemas</p>
          </div>
        ) : (
          inPackItems.map((unPaidItem) => (
            <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
          ))
        )}
      </div>
    </div>
  );
};

export default PackPage;
