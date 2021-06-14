import React from "react";
import { useSelector } from "react-redux";
import { selectShopItems } from "../redux/shop/shop.selectors";
import CardItem from "./CardItem";
import LabelContainer from "./LabelContainer";

const CollectionItemPage = () => {
  const collectionItems = useSelector((state) => selectShopItems(state));
  return (
    <div className="w-screen mb-4">
      <LabelContainer>
        <div>filter</div>
        <div>
          <input
            type="search"
            className="-mr-12 p-4 rounded-full border-none focus:outline-none"
          />
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </LabelContainer>

      <div className="grid grid-cols-6 gap-4 w-screen bg-gray-400">
        {collectionItems.map((collectionItem) => (
          <CardItem key={collectionItem.pid} item={collectionItem} />
        ))}
      </div>
    </div>
  );
};

export default CollectionItemPage;
