import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import LabelContainer from "../components/LabelContainer";
import { auth } from "../lib/firebase/firebase.utils";
import { deleteAllItem } from "../redux/cart/cart.actions";
import {
  selectCartItemsInPackQuantity,
  selectCartItemsInRateQuantity,
  selectCartItemsInSendQuantity,
  selectCartItemsInUnPaidQuantity,
} from "../redux/cart/cart.selectors";
import { setCurrentUser } from "../redux/user/user.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";

const UserPage = ({ history, match }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const itemsInUnPaidQuantity = useSelector((state) =>
    selectCartItemsInUnPaidQuantity(state)
  );
  const itemsInPackQuantity = useSelector((state) =>
    selectCartItemsInPackQuantity(state)
  );
  const itemsInSendQuantity = useSelector((state) =>
    selectCartItemsInSendQuantity(state)
  );
  const itemsInRateQuantity = useSelector((state) =>
    selectCartItemsInRateQuantity(state)
  );

  const dispatch = useDispatch();

  const {
    displayName,
    email,
    profileImage = "/images/icons/logo.png",
    backgroundProfileImage = "/images/background/green-square.jpg",
  } = currentUser;

  return (
    <div className="mb-10">
      <LabelContainer onClick={() => history.push("/shop")}>
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
          <span className="text-4xl font-light">Profil</span>
        </span>
      </LabelContainer>
      <LabelContainer>
        <div className="w-full h-96">
          <div
            className="h-full w-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${backgroundProfileImage})`,
            }}
            alt="Latar profil"
          >
            <div className="flex">
              <div className="flex mt-32 ml-20">
                <div className="flex justify-center items-center w-52 h-52 bg-white rounded-full overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={profileImage}
                    alt="Profile"
                  />
                </div>
                <div className="ml-10 mt-16 text-gray-200">
                  <div className="text-7xl font-bold">{displayName}</div>
                  <div className="text-4xl font-medium mt-2">{email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <span
          className="cursor-pointer font-light"
          onClick={() => history.push(`${match.path}/about`)}
        >
          Tentang anda
        </span>
      </LabelContainer>
      <LabelContainer>
        <span
          className="cursor-pointer font-light"
          onClick={() => history.push(`${match.path}/address`)}
        >
          Edit alamat
        </span>
      </LabelContainer>
      <LabelContainer>
        <span
          className="cursor-pointer font-light"
          onClick={() => history.push("/settings/profile")}
        >
          Lengkapi profil anda
        </span>
      </LabelContainer>
      <LabelContainer>
        <span
          className="cursor-pointer font-light"
          onClick={() => history.push("/state")}
        >
          Keberadaan barang anda
        </span>
      </LabelContainer>
      <LabelContainer>
        <div className="w-full h-full">
          <div className="font-light">Pesanan saya</div>

          <div className="flex justify-center">
            <div
              className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-400 rounded-full m-10 break-words cursor-pointer border-black border-2"
              onClick={() => history.push("/state/unpaid")}
            >
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0 border-black border-2">
                {itemsInUnPaidQuantity}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 -mt-4"
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
              <div className="text-xl">Belum dibayar</div>
            </div>
            <div
              className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-400 rounded-full m-10 break-words cursor-pointer border-black border-2"
              onClick={() => history.push("/state/pack")}
            >
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0 border-black border-2">
                {itemsInPackQuantity}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 -mt-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
              <div className="text-xl">Dalam pengemasan</div>
            </div>
            <div
              className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-400 rounded-full m-10 break-words cursor-pointer border-black border-2"
              onClick={() => history.push("/state/send")}
            >
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0 border-black border-2">
                {itemsInSendQuantity}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 -mt-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <div className="text-xl">Dalam pengiriman</div>
            </div>
            <div
              className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-400 rounded-full m-10 break-words cursor-pointer border-black border-2"
              onClick={() => history.push("/state/rate")}
            >
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0 border-black border-2">
                {itemsInRateQuantity}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 -mt-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <div className="text-xl text-center">Penilaian produk</div>
            </div>
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <span
          className="flex flex-1 justify-center items-center cursor-pointer font-bold bg-red-600 text-gray-200 py-4"
          onClick={() => {
            dispatch(setCurrentUser(null));
            dispatch(deleteAllItem());
            auth.signOut();
          }}
        >
          SIGN OUT
        </span>
      </LabelContainer>
    </div>
  );
};

export default withRouter(UserPage);
