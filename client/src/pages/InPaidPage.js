import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import PaymentBanner from "../components/PaymentBanner";
import { finishedTransaction } from "../redux/cart/cart.actions";
import {
  selectCartItemsTotal,
  selectPaymentType,
} from "../redux/cart/cart.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";

const InPaidPage = ({ history }) => {
  const paymentType = useSelector((state) => selectPaymentType(state));
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const totalPayment = useSelector((state) => selectCartItemsTotal(state));

  const dispatch = useDispatch();

  useEffect(() => {
    // CATATAN belum bisa connect
    // axios.get("inpaid").then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  const backgroundImage = {
    DANA: {
      image: "/images/background/dana.jpg",
      color: "bg-blue-400 ",
    },
    OVO: {
      image: "/images/background/ovo.png",
      color: "bg-purple-600",
    },
    GOPAY: {
      image: "/images/background/gopay.jpg",
      color: "bg-blue-400 ",
    },
    COD: {
      image: "/images/background/cod.jpg",
      color: "bg-green-800",
    },
  };

  const handleClickOk = () => {
    dispatch(finishedTransaction());
    history.push("/state/pack");
  };

  return (
    <div className="flex flex-1 flex-col justify-between mx-20 my-4">
      <div className="flex justify-center items-center font-semibold text-4xl uppercase mb-4 text-blue-400">
        transaksi sukses
      </div>
      <div
        className={`${
          backgroundImage[paymentType]
            ? `flex justify-between items-center px-10 ${backgroundImage[paymentType].color}`
            : ""
        }`}
      >
        <div className="w-2/3">
          <PaymentBanner
            imageUrl={`${
              backgroundImage[paymentType]
                ? backgroundImage[paymentType].image
                : ""
            }`}
            value={paymentType}
          />
        </div>

        <div className="flex justify-between flex-1 text-3xl font-bold">
          <div>ID Transaksi</div>
          <div>#13231231</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-4xl font-bold my-8">
        <div className="uppercase">total</div>
        <div className="text-red-600">{`Rp ${totalPayment}.000`}</div>
      </div>
      <div className="text-3xl space-y-4 mt-4">
        <div className="flex space-x-4">
          <div>Waktu Pembelian :</div>
          <div>11 Januari bertemu menjalani kisah cinta ini</div>
        </div>
        <div>Penerima :</div>
        <div className="ml-10">
          <div className="font-bold text-4xl">{currentUser.displayName}</div>
          <div>{currentUser.address}</div>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button
          className="bg-green-800 text-white uppercase py-4 px-14 font-bold text-2xl"
          onClick={handleClickOk}
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default withRouter(InPaidPage);
