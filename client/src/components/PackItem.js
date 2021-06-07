import React from "react";
import LabelContainer from "./LabelContainer";

const PackItem = ({ item }) => {
  const { name, description, image: imageUrl } = item;

  return (
    <LabelContainer>
      <div className="flex justify-between h-56 m-4 pt-4">
        <div className="w-1/5 pl-10">
          <img src={imageUrl} alt="Item" className="h-full" />
        </div>

        <div className="flex flex-col justify-center space-y-4 w-2/5 text-xl">
          <div className="text-3xl">{name}</div>
          <div className="text-gray-400">{description}</div>
        </div>
        <div></div>
      </div>
    </LabelContainer>
  );
};

export default PackItem;
