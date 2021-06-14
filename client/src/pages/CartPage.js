import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import CartItem from "../components/CartItem";
import LabelContainer from "../components/LabelContainer";
import {
  addItemWithQuantity,
  checkedAllItems,
  checkedItem,
} from "../redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartItemsChecked,
  selectCartItemsTotal,
} from "../redux/cart/cart.selectors";
import { selectShopItems } from "../redux/shop/shop.selectors";
import { selectCurrentUser } from "../redux/user/user.selectors";

const CartPage = ({ history }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [pidsRes, setPidsRes] = useState([]);
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartItemsChecked = useSelector((state) =>
    selectCartItemsChecked(state)
  );
  const [checkData, setCheckData] = useState([]);
  const cartItemsTotal = useSelector((state) => selectCartItemsTotal(state));
  const shopItems = useSelector((state) => selectShopItems(state));
  const dispatch = useDispatch();

  const { token } = currentUser;

  useEffect(() => {
    // axios
    //   .get("/cart", {
    //     headers: { Authorization: "Bearer " + token },
    //   })
    //   .then((res) => {
    //     setPidsRes(res.data);
    //     setCheckData(res.data);
    //     res.data.map((item) => {
    //       const quantityDesired = parseInt(item.total, 10);
    //       dispatch(addItemWithQuantity({ item, quantityDesired }));
    //     });
    //   });
    setIsCheckedAll(false);
  }, []);

  useEffect(() => {
    if (
      cartItems.length === cartItemsChecked.length &&
      cartItems.length !== 0
    ) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [cartItemsChecked, cartItems.length]);

  const handleCheckedAll = () => {
    setIsCheckedAll(!isCheckedAll);
    dispatch(checkedAllItems());
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div>
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
            <span className="text-4xl font-light">Keranjang</span>
          </span>
        </LabelContainer>

        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center text-5xl mt-10">
            Tidak ada barang di dalam Cart
          </div>
        ) : (
          cartItems.map((item) => {
            return (
              <LabelContainer key={item.pid}>
                <div
                  onClick={() => {
                    dispatch(checkedItem(item));
                  }}
                >
                  <input
                    className="w-8 h-8 mr-4 cursor-pointer"
                    type="checkbox"
                    name="itemToCheckout"
                    checked={item.checked}
                    onChange={() => {}}
                    required
                  />
                </div>
                <CartItem item={item} />
              </LabelContainer>
            );
          })
        )}
      </div>

      <LabelContainer>
        <input
          className="w-8 h-8 mr-4"
          type="checkbox"
          name="itemToCheckout"
          checked={isCheckedAll}
          required
          onChange={handleCheckedAll}
        />

        <div className="flex flex-auto justify-between items-center">
          <div className="w-1/6">Pilih Semua</div>
          <div className="w-2/6 flex justify-between items-center">
            <span className="text-4xl font-light">Total Harga </span>
            <span className="text-5xl">{`Rp ${cartItemsTotal}.000`}</span>
          </div>
          <button
            className="border-2 border-gray-800 w-1/6 px-6 py-2 bg-green-800 text-white"
            onClick={() => {
              if (cartItemsChecked.length) {
                history.push("/checkout");
                window.scrollTo(0, 0);
              }
            }}
          >
            Checkout
          </button>
        </div>
      </LabelContainer>
    </div>
  );
};

export default withRouter(CartPage);
