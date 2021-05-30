import React from "react";

const HeaderShop = () => (
  <div className="flex justify-end m-2">
    <div className="bg-green-500 mr-4 h-full w-4/6 relative">
      <img
        src="/images/background/bg-green-square.jpg"
        alt="square green background"
      />
      <div className="absolute top-20 left-40 text-center">
        <div className="uppercase text-gray-200 font-bold text-xl">
          khusus hari ini saja!!!
        </div>
        <div className="text-gray-200 font-bold text-9xl">Diskon</div>
        <div className="text-gray-200 font-bold text-9xl">50%*</div>
        <div className="text-left mt-20 text-gray-200 font-bold">
          <div>* Untuk semua barang kategori.</div>
          <div>* Hanya berlaku dengan pembayaran menggunakan GOPAY.</div>
        </div>
      </div>
      <div className="absolute top-20 right-10 text-center">
        <div className="flex justify-center">
          <img
            src="/images/background/annie-spratt.jpg"
            alt="square green background"
            width="300"
          />
        </div>
        <div className="flex">
          <img
            src="/images/background/sarah-dorweiler.jpg"
            alt="square green background"
            width="275"
          />
          <img
            src="/images/background/peter-zagar.jpg"
            alt="square green background"
            width="275"
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderShop;
