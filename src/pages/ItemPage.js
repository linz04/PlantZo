import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";

import LabelContainer from "../components/LabelContainer";

import { checkedItem, addItemWithQuantity } from "../redux/cart/cart.actions";

const ItemPage = ({ history, location }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [item, setItem] = useState({
    name: "",
    description: "",
    image: "",
    pid: 0,
    price: 0,
    quantity: 0,
    rating: 0,
  });

  const {
    name,
    description,
    image: imageUrl,
    pid,
    price,
    quantity,
    rating,
  } = item;

  useEffect(() => {
    axios.get(location.pathname).then((res) => {
      setItem(res.data);
    });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemWithQuantity({ item, itemQuantity }));
    // CATATAN Belum bisa connect
    // axios.post(location.pathname, {pid, quantity}).then((res) => {
    //   setItemQuantity(0);

    //   console.log(res);
    //   console.log(res.data);
    // });
    // setClickToCard(true);
    alert("Sukses memasukan ke keranjang");
  };

  const handleBuyItem = () => {
    dispatch(addItemWithQuantity({ item, itemQuantity }));
    dispatch(checkedItem(item));
    history.push("/checkout");
  };

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <LabelContainer
        onClick={() => {
          setItemQuantity(0);
          history.push("/shop");
        }}
      >
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
          <span className="text-4xl font-light">Deskripsi produk</span>
        </span>
      </LabelContainer>
      <LabelContainer>
        <div className="h-full flex-1 flex space-x-14 m-4">
          <div className="w-1/3 h-full">
            <img src={imageUrl} alt="Item" />
          </div>
          <div className="w-2/3 flex flex-col justify-between pl-32 my-10">
            <h2 className="text-6xl">{name}</h2>
            <div className="flex items-center space-x-4 text-gray-400">
              <span className="flex items-center">
                {ratingArray.map((rate, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span>|</span>
              <span>Terjual</span>
            </div>
            <h3 className="text-green-800 font-bold text-6xl">
              Rp {price}.000
            </h3>
            <div className="flex">
              <div className="mr-6">
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
              <div className="text-gray-400">
                <div>
                  <span>Pengiriman ke </span>
                  <span className="text-gray-800 font-medium text-4xl">
                    Seluruh Indonesia
                  </span>
                </div>
                <div>
                  <span>Ongkos kirim </span>
                  <span className="text-gray-800 font-medium text-4xl">
                    Rp 8.000 - Rp 12.000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex text-gray-400 space-x-4 items-center">
              <div>Kuantitas</div>
              <div className="w-96 h-20 border flex justify-between items-center text-gray-800">
                <div
                  className="w-1/4 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    if (itemQuantity > 1) setItemQuantity(itemQuantity - 1);
                  }}
                >
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
                      d="M20 12H4"
                    />
                  </svg>
                </div>
                <div className="w-1/4 flex items-center justify-center text-5xl">
                  {itemQuantity}
                </div>
                <div
                  className="w-1/4 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    if (quantity > itemQuantity)
                      setItemQuantity(itemQuantity + 1);
                  }}
                >
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              <div>Tersisa {quantity}</div>
            </div>
            <div className="flex justify-center space-x-8 -mb-8">
              <button
                className="flex justify-between items-center border-2 border-black px-8 py-6 w-96"
                onClick={handleAddToCart}
              >
                <div>
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
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-green-800 font-normal">
                  Masukan Keranjang
                </div>
              </button>
              <button
                className="flex justify-between items-center border-2 border-black bg-green-800 px-8 py-6 w-96"
                onClick={handleBuyItem}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <div className="text-white font-normal">Bayar Sekarang</div>
              </button>
            </div>
          </div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-col justify-between h-full m-4">
          <div className="w-full">
            <h3 className="text-4xl">Spesifikasi Product</h3>
            <div className="grid grid-cols-5 gap-2 text-3xl text-gray-400 w-full mt-4">
              <div className="space-y-2">
                <div>Stok</div>
                <div>Dikirim dari</div>
              </div>
              <div className="space-y-2">
                <div>{quantity}</div>
                <div>IPB University</div>
              </div>
            </div>
          </div>
          <div className="mt-20 h-full">
            <h3 className="text-4xl">Deskripsi Product</h3>
            <div className="text-3xl text-gray-400 mt-4">
              <p className="text-left w-1/2 whitespace-pre-line break-normal">
                {description}
              </p>
            </div>
          </div>
        </div>
      </LabelContainer>

      <LabelContainer>
        <div className="flex flex-col justify-between">
          <h3 className="text-4xl">Penilaian Produk</h3>
          <div className="my-4 flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
            <span className="text-gray-400 text-2xl">
              {rating} | 1 Penilaian
            </span>
          </div>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col text-2xl ml-8 space-y-2">
              <span>Username akun</span>
              <span className="flex">
                {ratingArray.map((rate, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <span className="text-gray-400">4 / 4 / 18</span>
            </div>
          </div>
        </div>
      </LabelContainer>
    </>
  );
};

export default withRouter(ItemPage);
