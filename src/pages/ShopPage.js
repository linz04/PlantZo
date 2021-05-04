import React from "react";

import HeaderShop from "../components/HeaderShop";
import LabelContainer from "../components/LabelContainer";
import CardItem from "../components/CardItem";
import CollectionItem from "../components/CollectionItem";

const ShopPage = () => (
  <div className="bg-gray-200 flex flex-col">
    <HeaderShop />

    <LabelContainer>
      <span className="uppercase">paling banyak dibeli</span>
    </LabelContainer>

    <CollectionItem>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CollectionItem>

    <LabelContainer>
      <span className="uppercase">paling banyak dicari</span>
    </LabelContainer>

    <CollectionItem>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CollectionItem>

    <div className="flex justify-evenly bg-gray-100 p-3 m-2 mt-6 text-3xl uppercase">
      Filter
    </div>

    <CollectionItem>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CollectionItem>
  </div>
);

export default ShopPage;
