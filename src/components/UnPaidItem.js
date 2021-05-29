import React from "react";
import LabelContainer from "./LabelContainer";

const UnPaidItem = ({ item }) => {
  const {
    name = "JUDUL",
    imageUrl = "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  } = item;

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

export default UnPaidItem;
