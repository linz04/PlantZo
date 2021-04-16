import React from "react";

const CollectionItem = ({ children }) => (
  <div className="flex justify-evenly items-center">
    <div className="grid grid-cols-6">{children}</div>
  </div>
);

export default CollectionItem;
