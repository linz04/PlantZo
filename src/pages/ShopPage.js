import React from "react";

import Nav from "../components/Nav";

import HeaderShop from "../components/HeaderShop";

import CardItem from "../components/CardItem";

import CollectionItem from "../components/CollectionItem";

const ShopPage = () => (
  <div className="bg-gray-200 flex flex-col">
    <Nav />

    <HeaderShop />

    <div className="bg-gray-100 p-2 m-2 text-xl uppercase">
      paling banyak dibeli
    </div>

    <CollectionItem>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CollectionItem>

    <div className="bg-gray-100 p-2 m-2 text-xl uppercase">
      paling banyak dicari
    </div>

    <CollectionItem>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CollectionItem>

    <div className="flex justify-evenly bg-gray-100 p-1 m-2 text-xl uppercase">
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

    <div className="flex justify-center items-center bg-green-300 p-1 mt-4">
      Footer
    </div>
  </div>
);

export default ShopPage;
