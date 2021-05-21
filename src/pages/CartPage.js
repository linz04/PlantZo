import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import axios from "axios";

import CartItem from "../components/CartItem";
import LabelContainer from "../components/LabelContainer";

import { checkedAllItems, checkedItem } from "../redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartItemsTotal,
  selectCartItemsChecked,
} from "../redux/cart/cart.selectors";

const CartPage = ({ history }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const cartItems = useSelector((state) => selectCartItems(state));
  const cartItemsChecked = useSelector((state) =>
    selectCartItemsChecked(state)
  );
  const cartItemsTotal = useSelector((state) => selectCartItemsTotal(state));

  const dispatch = useDispatch();

  useEffect(() => {
    setIsCheckedAll(false);
  }, []);

  useEffect(() => {
    if (cartItems.length === cartItemsChecked.length) {
      setIsCheckedAll(true);
    } else {
      setIsCheckedAll(false);
    }
  }, [cartItemsChecked]);

  const handleCheckedAll = () => {
    setIsCheckedAll(!isCheckedAll);
    dispatch(checkedAllItems());
  };

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <LabelContainer onClick={() => history.push("/shop")}>
          <span className="mb-2 mr-2">&larr;</span>
          <span>Keranjang</span>
        </LabelContainer>

        {cartItems.map((item) => {
          console.log(item);
          return (
            <LabelContainer key={item.pid}>
              <div
                onClick={() => {
                  dispatch(checkedItem(item));
                }}
              >
                <input
                  className="w-8 h-8 mr-4"
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
        })}
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
          <div className="w-2/6">{`Total Harga : Rp ${cartItemsTotal}.000`}</div>
          <button
            className="border-2 border-gray-800 w-1/6 px-6 py-2 bg-green-700"
            onClick={() => {
              if (cartItemsChecked.length) history.push("/checkout");
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
