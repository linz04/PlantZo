import React from "react";

const CollectionItem = ({ children }) => (
  <div className="flex justify-around items-center mt-4 mb-8">
    <div className="grid grid-cols-6">{children}</div>
  </div>
);

export default CollectionItem;
