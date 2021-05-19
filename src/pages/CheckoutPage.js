import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";

import {
  selectCartItemsChecked,
  selectCartItemsCount,
} from "../redux/cart/cart.selectors";

const CheckoutPage = ({ history }) => {
  const cartItems = useSelector((state) => selectCartItemsChecked(state));
  const cartItemsCount = useSelector((state) => selectCartItemsCount(state));

  return (
    <div className="flex flex-1 flex-col justify-between">
      <LabelContainer onClick={() => history.push("/cart")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>CheckoutPage</span>
      </LabelContainer>

      <LabelContainer>ALAMAT</LabelContainer>

      <LabelContainer>ITEM</LabelContainer>

      <LabelContainer>PENGIRIMAN</LabelContainer>

      <LabelContainer>
        <div className="flex flex-col flex-auto space-y-4 justify-between">
          <div className="flex flex-auto  space-x-2">
            <div className="w-1/6">Logo</div>
            <div className="w-2/3">Pembayaran</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center items-center bg-blue-600 h-64">
              1
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              2
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              3
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              4
            </div>
          </div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-auto space-x-2 justify-between">
          <div className="flex flex-auto  space-x-2">
            <div className="w-1/6">Logo</div>
            <div className="w-2/3">Total pesanan</div>
          </div>
          <div className="flex justify-end w-1/4">{`Rp ${cartItemsCount}.000`}</div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-auto justify-end items-center space-x-4">
          <button
            className="w-1/4 px-6 py-4 bg-green-700 text-white"
            onClick={() => history.push("/unPaid")}
          >
            Bayar Nanti
          </button>
          <button
            className="w-1/4 px-6 py-4 bg-green-700 text-white"
            onClick={() => history.push("/inPaid")}
          >
            Bayar Sekarang
          </button>
        </div>
      </LabelContainer>
    </div>
  );
};

export default withRouter(CheckoutPage);
