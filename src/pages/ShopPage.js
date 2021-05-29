import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import HeaderShop from "../components/HeaderShop";
import LabelContainer from "../components/LabelContainer";
import CardItem from "../components/CardItem";
import CollectionItem from "../components/CollectionItem";

import { selectShopItems } from "../redux/shop/shop.selectors";
import {
  setDefaultQuantityDesired,
  setDefaultChecked,
} from "../redux/shop/shop.actions";

const ShopPage = ({ history, match }) => {
  const items = useSelector((state) => selectShopItems(state));
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/shop").then((res) => console.log(res.data));
    dispatch(setDefaultQuantityDesired());
    dispatch(setDefaultChecked());
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col">
      <HeaderShop />

      <LabelContainer
        onClick={() => history.push(`${match.url}/filter/most-purchased`)}
      >
        <span className="uppercase">paling banyak dibeli</span>
      </LabelContainer>

      <CollectionItem>
        {items
          .sort((item1, item2) => item2.pid - item1.pid)
          .filter((item, idx) => idx < 6)
          .map((item) => (
            <CardItem key={item.pid} item={item} />
          ))}
      </CollectionItem>

      <LabelContainer
        onClick={() => history.push(`${match.url}/filter/most-wanted`)}
      >
        <span className="uppercase">paling banyak dicari</span>
      </LabelContainer>

      <CollectionItem>
        {items
          .sort((item1, item2) => item1.pid - item2.pid)
          .filter((item, idx) => idx < 6)
          .map((item) => (
            <CardItem key={item.pid} item={item} />
          ))}
      </CollectionItem>

      <div className="flex justify-evenly bg-gray-100 p-3 m-2 mt-6 text-3xl uppercase">
        Filter
      </div>

      <CollectionItem>
        {items
          .filter((item, idx) => idx < 12)
          .map((item) => (
            <CardItem key={item.pid} item={item} />
          ))}
      </CollectionItem>
    </div>
  );
};

export default withRouter(ShopPage);
