import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router";

import CartItem from "../components/CartItem";
import LabelContainer from "../components/LabelContainer";
import { checkedAllItems, checkedItem } from "../redux/cart/cart.actions";
import { selectCartItems } from "../redux/cart/cart.selectors";

const CartPage = ({ history }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const cartItems = useSelector((state) => selectCartItems(state));

  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    const { id, item } = event.target;
    console.log(Object.values(id));
    console.log(item);
    console.log(event.target);
    // checkedItem(cartItems, pid);
  };

  const handleCheckedAll = () => {
    setIsCheckedAll(!isCheckedAll);
    dispatch(checkedAllItems());
  };

  return (
    <div>
      <LabelContainer onClick={() => history.push("/shop")}>
        <span className="mb-2 mr-2">&larr;</span>
        <span>Keranjang</span>
      </LabelContainer>

      {cartItems.map((item) => {
        console.log(item);
        return (
          <LabelContainer key={item.pid}>
            <input
              className="w-8 h-8 mr-4"
              type="checkbox"
              id={item}
              item={item}
              name="itemToCheckout"
              checked={item.checked}
              required
              onChange={handleCheckbox}
            />
            <CartItem item={item} />
          </LabelContainer>
        );
      })}

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
          <div className="w-2/6">{`Total Harga : Rp ${"Hai"}.000`}</div>
          <button
            className="border-2 border-gray-800 w-1/6 px-6 py-2 bg-green-700"
            onClick={() => history.push("/checkout")}
          >
            Checkout
          </button>
        </div>
      </LabelContainer>
    </div>
  );
};

export default withRouter(CartPage);
