import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";

import LabelContainer from "../components/LabelContainer";
import CheckoutItem from "../components/CheckoutItem";
import PaymentBanner from "../components/PaymentBanner";

import {
  selectCartItemsChecked,
  selectCartItemsTotal,
  selectDeliveryType,
} from "../redux/cart/cart.selectors";
import { setDeliveryType } from "../redux/cart/cart.actions";

const CheckoutPage = ({ history }) => {
  const [paymentType, setPaymentType] = useState("");
  const [paymentClicked, setPaymentClicked] = useState(false);

  const deliveryType = useSelector((state) => selectDeliveryType(state));

  const dispatch = useDispatch();

  const convert = {
    type: 0,
    price: 1,
  };
  const { price } = convert;

  const cartItems = useSelector((state) => selectCartItemsChecked(state));
  const cartItemsTotal = useSelector((state) => selectCartItemsTotal(state));
  const checkoutItemsTotal = cartItemsTotal + Number(deliveryType[price]);

  const handleCheckRadio = (e) => {
    const { value } = e.target;
    dispatch(setDeliveryType(value.split(",")));
  };

  const handlePaymentMethod = (e) => {
    const { innerHTML } = e.target;
    setPaymentType(innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios.post("api/signup", {  }).then((res) => {
    //   console.log(res.data);
    //   if ("User Already Exist!" === res.data) {
    //     console.log("USER_EXIST");
    //   }
    // });

    history.push("/state/inpaid");
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <LabelContainer onClick={() => history.push("/cart")}>
        <span className="flex items-center justify-center space-x-4 cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </span>
          <span className="text-4xl font-light">Check Out</span>
        </span>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-col">
          <div className="flex">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="font-light">
              <div>Alamat</div>
              <div>Pengiriman</div>
            </div>
          </div>
          <div className="m-16">Alamat lengkap disini ...</div>
        </div>
      </LabelContainer>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex-col justify-center items-center space-y-4"
      >
        <LabelContainer>
          <div className="flex flex-auto flex-col justify-between space-y-2">
            <div className="flex space-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="font-light">IPB Mall</div>
            </div>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.pid} item={cartItem} />
            ))}
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto flex-col justify-between space-y-2">
            <div className="flex space-x-4 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <div className="font-light">Pilih Pengiriman</div>
            </div>
            <div className="bg-gray-200 h-44 p-2">
              <div className="flex flex-1 flex-col justify-between h-full space-y-2">
                <div className="flex items-center">
                  <input
                    className="h-8 w-8 cursor-pointer"
                    type="radio"
                    name="delivery_type"
                    value={["JNE", 8]}
                    onChange={handleCheckRadio}
                  />
                  <div className="flex  flex-1 justify-between items-center mr-10">
                    <span className="ml-4 text-3xl text-gray-800">
                      J&T Express
                    </span>
                    <span>Rp 8.000</span>
                  </div>
                </div>
                <div className="flex items-center my-2">
                  <input
                    className="h-8 w-8 cursor-pointer"
                    type="radio"
                    name="delivery_type"
                    value={["J&T", 10]}
                    onChange={handleCheckRadio}
                  />
                  <div className="flex  flex-1 justify-between items-center mr-10">
                    <span className="ml-4 text-3xl text-gray-800">
                      JNE Regular (Cashless)
                    </span>
                    <span>Rp 10.000</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    my-4
                    className="h-8 w-8 cursor-pointer"
                    type="radio"
                    name="delivery_type"
                    value={["ID", 12]}
                    onChange={handleCheckRadio}
                  />
                  <div className="flex  flex-1 justify-between items-center mr-10">
                    <span className="ml-4 text-3xl text-gray-800">
                      ID Express
                    </span>
                    <span>Rp 12.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-col flex-auto space-y-4 justify-between">
            <div className="flex space-x-4 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="font-light">Pilih Pembayaran ( Salah satu )</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <PaymentBanner
                value="DANA"
                handleClick={handlePaymentMethod}
                imageUrl="/images/background/dana.jpg"
              />
              <PaymentBanner
                value="OVO"
                handleClick={handlePaymentMethod}
                imageUrl="/images/background/ovo.png"
              />
              <PaymentBanner
                value="GOPAY"
                handleClick={handlePaymentMethod}
                imageUrl="/images/background/gopay.jpg"
              />
              <PaymentBanner
                value="COD"
                handleClick={handlePaymentMethod}
                imageUrl="/images/background/cod.jpg"
              />
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto space-x-2 justify-between">
            <div className="flex space-x-4 mb-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="font-light">Total Pesanan</div>
            </div>
            <div className="flex justify-end items-end w-1/4 text-5xl">
              {Number(deliveryType[price])
                ? `Rp ${checkoutItemsTotal}.000`
                : `Rp ${cartItemsTotal}.000`}
            </div>
          </div>
        </LabelContainer>

        <LabelContainer>
          <div className="flex flex-auto justify-end items-center space-x-4">
            <button
              className="w-1/4 px-6 py-4 bg-green-900 text-white"
              onClick={() => history.push("/state/unpaid")}
            >
              Bayar Nanti
            </button>
            <button
              type="submit"
              value="submit form"
              className="w-1/4 px-6 py-4 bg-green-900 text-white"
            >
              Bayar Sekarang
            </button>
          </div>
        </LabelContainer>
      </form>
    </div>
  );
};

export default withRouter(CheckoutPage);
