import React from "react";
import ButHome from "../components/ButHome";
import MidHome from "../components/MidHome";
import TopHome from "../components/TopHome";
import UpHome from "../components/UpHome";

const HomePage = () => {
  return (
    <div>
      <div>
        <TopHome />
      </div>
      <div>
        <MidHome />
      </div>
      <div>
        <UpHome />
      </div>
      <div>
        <ButHome />
      </div>
    </div>
  );
};

export default HomePage;
