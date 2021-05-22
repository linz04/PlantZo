import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import LabelContainer from "../components/LabelContainer";

import { auth } from "../lib/firebase/firebase.utils";
import { setCurrentUser } from "../redux/user/user.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

const UserPage = ({ items = {}, history, match }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const itemsCount = useSelector((state) => selectCartItemsCount(state));
  const dispatch = useDispatch();

  const { displayName, email, profileImage, backgroundImageProfile } =
    currentUser;

  const {
    quantityInPack = 1,
    amountInDelivery = 2,
    numberOfProductRatings = 3,
  } = items;

  return (
    <div className="mb-10">
      <LabelContainer>
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <span>Profil</span>
      </LabelContainer>
      <LabelContainer>
        <div className="w-full h-96">
          <div
            className="h-full w-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${backgroundImageProfile})`,
            }}
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
                <div className="ml-10 mt-16 text-gray-800">
                  <div className="text-7xl font-bold">{displayName}</div>
                  <div className="text-4xl font-medium mt-2">{email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>
        <span onClick={() => history.push(`${match.path}/about`)}>
          Tentang anda
        </span>
      </LabelContainer>
      <LabelContainer onClick={() => history.push("/settings/profile")}>
        Lengkapi profil anda!!
      </LabelContainer>
      <LabelContainer>
        <div className="w-full h-full">
          <div>Pesanan saya</div>

          <div className="flex justify-center">
            <div className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-300 rounded-full m-10 break-words">
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0">
                {itemsCount}
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
            <div className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-300 rounded-full m-10 break-words">
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0">
                {quantityInPack}
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
            <div className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-300 rounded-full m-10 break-words">
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0">
                {amountInDelivery}
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
            <div className="relative flex flex-col justify-center items-center w-52 h-52 bg-green-300 rounded-full m-10 break-words">
              <span className="flex justify-center items-center rounded-full bg-red-600 w-16 h-16 absolute top-0 right-0">
                {numberOfProductRatings}
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <div className="text-xl text-center">Penilaian produk</div>
            </div>
          </div>
        </div>
      </LabelContainer>
      <LabelContainer>Pengaturan</LabelContainer>
      <LabelContainer>
        <span
          className="text-xl ml-20"
          onClick={() => history.push("/settings/profile")}
        >
          Profil
        </span>
      </LabelContainer>
      <LabelContainer>
        <span className="text-xl ml-20">Bahasa</span>
      </LabelContainer>
      <LabelContainer>
        <span
          className="flex justify-center items-center text-xl ml-20"
          onClick={() => {
            dispatch(setCurrentUser(null));
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
