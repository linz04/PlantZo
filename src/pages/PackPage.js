import React from "react";
import { useSelector } from "react-redux";

import UnPaidItem from "../components/UnPaidItem";

import { selectCartItemsChecked } from "../redux/cart/cart.selectors";

const PackPage = () => {
  const unPaidItems = useSelector((state) => selectCartItemsChecked(state));

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col">
        {unPaidItems.map((unPaidItem) => (
          <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
        ))}
      </div>
    </div>
  );
};

export default PackPage;
