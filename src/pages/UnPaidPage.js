import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import UnPaidItem from "../components/UnPaidItem";

import {
  selectCartItemsChecked,
  selectCartItemsTotal,
  selectDeliveryType,
} from "../redux/cart/cart.selectors";

const UnPaidPage = ({ history }) => {
  const unPaidItems = useSelector((state) => selectCartItemsChecked(state));
  const unPaidItemsTotal = useSelector((state) => selectCartItemsTotal(state));

  const deliveryType = useSelector((state) => selectDeliveryType(state));
  const convert = {
    type: 0,
    price: 1,
  };
  const { type, price } = convert;

  console.log(deliveryType);

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col">
        {unPaidItems.map((unPaidItem) => (
          <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
        ))}
      </div>
      <div className="flex flex-col items-end m-10 text-3xl space-y-4">
        <div>{`Rp ${unPaidItemsTotal + Number(deliveryType[price])}.000`}</div>
        <button
          onClick={() => history.push("/state/inpaid")}
          className="bg-green-800 px-6 py-4 text-white"
        >
          Perlu dibayar
        </button>
      </div>
    </div>
  );
};

export default withRouter(UnPaidPage);
