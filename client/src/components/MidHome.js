import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Popup from "../components/Popup";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const MidHome = () => {
  const [signUpPopupVisible, setSignUpPopupVisible] = useState(false);
  const [signInPopupVisible, setSignInPopupVisible] = useState(false);

  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    axios.get("/shop").then((res) => {
      setShopItems(res.data);
    });
  }, []);

  const handleClickSignup = () => {
    setSignUpPopupVisible(!signUpPopupVisible);
  };

  const handleClickSignin = () => {
    setSignInPopupVisible(!signInPopupVisible);
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      {showModal ? (
        <>
          <div className="flex flex-col justify-center items-center text-center mt-10">
            <div className="flex flex-col justify-center bg-gray-100 text-center h-full relative w-1/2 lg:w-1/3">
              <div className="flex flex-col justify-end items-end mr-5">
                <button
                  className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span>×</span>
                </button>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-yellow-300 text-bold text-2xl ml-5 my-3">
                  <img
                    src="/images/icons/warning.png"
                    alt="warning"
                    className="inline w-10 h-10"
                  />
                  OPPSS!!!
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 font-bold p-5">
                <div>
                  <button
                    onClick={handleClickSignup}
                    className="w-30 p-4 bg-gray-800 text-gray-100 uppercase md:w-40  hover:bg-black"
                  >
                    signup
                  </button>
                  <Popup
                    trigger={signUpPopupVisible}
                    handleClick={handleClickSignup}
                  >
                    <SignUp />
                  </Popup>
                </div>
                <div>
                  <button
                    onClick={handleClickSignin}
                    className="w-30 p-4 md:w-40 bg-gray-800 text-gray-100 uppercase hover:bg-black"
                  >
                    login
                  </button>
                  <Popup
                    trigger={signInPopupVisible}
                    handleClick={handleClickSignin}
                  >
                    <SignIn />
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="grid grid-cols-3 gap-4 justify-center item-center text-center text-3xl font-serif font-bold my-10 pb-10">
        <div>
          Paling Banyak Dicari
          <div
            className="flex justify-center item-center text-center"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <ul className="mt-5">
              <li className="w-40 md:w-80 h-20 rounded-lg bg-white mb-6 bg-round">
                <span className="flex justify-start text-xl ml-2 font-normal font-sans">
                  Aglonema
                </span>
                <span className="flex justify-start text-xl ml-2 font-thin font-sans mt-5 text-gray-400">
                  261 Pencarian
                </span>
              </li>
              <li className="w-40 md:w-80 h-20 rounded-lg bg-white mb-6">
                <span className="flex justify-start text-xl ml-2 font-normal font-sans">
                  {" "}
                  Monster
                </span>
                <span className="flex justify-start text-xl ml-2 font-thin font-sans mt-5 text-gray-400">
                  256 Pencarian
                </span>
              </li>
              <li className="w-40 md:w-80 h-20 rounded-lg bg-white mb-6">
                <span className="flex justify-start text-xl ml-2 font-normal font-sans">
                  {" "}
                  Spider Plant
                </span>
                <span className="flex justify-start text-xl ml-2 font-thin font-sans mt-5 text-gray-400">
                  233 Pencarian
                </span>
              </li>
              <li className="w-40 md:w-80 h-20 rounded-lg bg-white mb-6">
                <span className="flex justify-start text-xl ml-2 font-normal font-sans">
                  {" "}
                  Keladi
                </span>
                <span className="flex justify-start text-xl ml-2 font-thin font-sans mt-5 text-gray-400">
                  205 Pencarian
                </span>
              </li>
              <li className="w-40 md:w-80 h-10 rounded-lg bg-white mb-6">
                <span className="flex justify-start ml-2 text-xl font-normal font-sans">
                  {" "}
                  Lainnya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2">
          Paling Banyak Dibeli
          <div className="flex space-x-8 justify-center items-center mt-4">
            {shopItems.length !== 0 ? (
              shopItems
                .sort((item1, item2) => item2.pid - item1.pid)
                .filter((item, idx) => idx < 3)
                .map((item) => <CardItem key={item.pid} item={item} />)
            ) : (
              <div>Shop data masih belum terambil</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MidHome;
