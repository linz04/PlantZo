import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";

import {
  selectCartItemsChecked,
  selectCartItemsTotal,
} from "../redux/cart/cart.selectors";

const CheckoutPage = ({ history }) => {
  const [deliveryType, setDeliveryType] = useState("");

  const cartItems = useSelector((state) => selectCartItemsChecked(state));
  const cartItemsTotal = useSelector((state) => selectCartItemsTotal(state));

  console.log(cartItemsTotal);

  const handleCheckRadio = (e) => {
    const { value } = e.target;
    setDeliveryType(value);
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <LabelContainer onClick={() => history.push("/cart")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>CheckoutPage</span>
      </LabelContainer>

      <LabelContainer>ALAMAT</LabelContainer>

      <LabelContainer>ITEM</LabelContainer>

      <LabelContainer>
        <div className="flex flex-auto flex-col justify-between space-y-2">
          <div>
            <div>Logo</div>
            <div>Pilih Pengiriman</div>
          </div>
          <div className="bg-gray-400">
            <div>
              <input
                type="radio"
                name="delivery_type"
                value="J&T"
                // checked={this.state.address === result.ADDRESS}
                onChange={handleCheckRadio}
              />

              <input
                type="radio"
                name="delivery_type"
                value="JNE"
                // checked={this.state.address === result.ADDRESS}
                onChange={handleCheckRadio}
              />

              <input
                type="radio"
                name="delivery_type"
                value="ID"
                // checked={this.state.address === result.ADDRESS}
                onChange={handleCheckRadio}
              />
            </div>
          </div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-col flex-auto space-y-4 justify-between">
          <div className="flex flex-auto  space-x-2">
            <div className="w-1/6">Logo</div>
            <div className="w-2/3">Pilih Pembayaran</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-center items-center bg-blue-600 h-64">
              DANA
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              OVO
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              GOPAY
            </div>
            <div className="flex justify-center items-center bg-blue-600 h-64">
              COD
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
          <div className="flex justify-end w-1/4">{`Rp ${cartItemsTotal}.000`}</div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-auto justify-end items-center space-x-4">
          <button
            className="w-1/4 px-6 py-4 bg-green-700 text-white"
            onClick={() => history.push("/unpaid")}
          >
            Bayar Nanti
          </button>
          <button
            className="w-1/4 px-6 py-4 bg-green-700 text-white"
            onClick={() => history.push("/inpaid")}
          >
            Bayar Sekarang
          </button>
        </div>
      </LabelContainer>
    </div>
  );
};

export default withRouter(CheckoutPage);
