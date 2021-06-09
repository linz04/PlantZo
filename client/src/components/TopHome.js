import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Warning from "../components/Warning";
import SharePopup from "./SharePopup";
const TopHome = () => {
    return(
        <div className="bg-cover w-full h-full" style={{backgroundImage: "url(/images/icons/Home.png)"}}>
            <div>
                <Warning />
            </div>
        <div className="text-center text-white ml-8 font-lighttext-2xl">
              <span className="block pt-40 md:pr-80 text-3xl font-serif">Bring Your Plant</span>
              <span className="block mt-10 md:pr-80 font-bold text-5xl">PLANTZO</span>
              <span className="block mt-20 md:pr-80">Mari menjadi bagian dari plantzo</span>
              <span className="block md:pr-80">Sebuah toko online yang menyediakan berbagai tanaman dengan</span> 
              <span className="block md:pr-80 pb-40">harga terjangkau</span>
          </div>
     </div>
    );
    };
    export default TopHome;