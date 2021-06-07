import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import UnPaidItem from "../components/UnPaidItem";
import { checkedAllItems } from "../redux/cart/cart.actions";
import {
  selectCartItemsInUnPaid,
  selectCartItemsTotal,
  selectDeliveryType,
} from "../redux/cart/cart.selectors";

const UnPaidPage = ({ history }) => {
  const unPaidItems = useSelector((state) => selectCartItemsInUnPaid(state));
  const unPaidItemsTotal = useSelector((state) => selectCartItemsTotal(state));
  const deliveryType = useSelector((state) => selectDeliveryType(state));

  const dispatch = useDispatch();

  const convert = {
    type: 0,
    price: 1,
  };
  const { price } = convert;

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col">
        {unPaidItems.length === 0
          ? null
          : unPaidItems.map((unPaidItem) => (
              <UnPaidItem key={unPaidItem.pid} item={unPaidItem} />
            ))}
      </div>

      {unPaidItems.length === 0 ? (
        <div className="flex justify-center items-center flex-1">
          <p className="text-5xl">Tidak ada barang yang belum dibayar</p>
        </div>
      ) : (
        <div className="flex flex-col items-end mr-10 mb-4 text-3xl space-y-4">
          <div>
            {unPaidItemsTotal
              ? `Rp ${unPaidItemsTotal + Number(deliveryType[price])}.000`
              : null}
          </div>
          <button
            onClick={() => {
              dispatch(checkedAllItems());
              history.push("/checkout");
              window.scrollTo(0, 0);
            }}
            className="bg-green-900 px-6 py-4 text-white"
          >
            Perlu dibayar
          </button>
        </div>
      )}
    </div>
  );
};

export default withRouter(UnPaidPage);
