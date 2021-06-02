import React from "react";

const PageContainer = ({ children }) => (
  <div className="bg-gray-200 flex flex-col justify-between min-h-screen">
    {children}
  </div>
);

export default PageContainer;
