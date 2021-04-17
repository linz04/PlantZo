import React from "react";

const CardItem = () => (
  <div className="flex flex-col w-72 h-full bg-gray-100 m-2">
    <div className="m-2">
      <img
        src="https://public.urbanasia.com/images/post/2020/09/29/1601351424-aglonema.jpg"
        alt="Item"
      />
      <div className="flex flex-col justify-center items-start mt-2">
        <h3 className="text-3xl">Tanaman Keladi</h3>
        <p className="text-2xl font-semibold">RP 25.000</p>
        <div className="text-2xl">
          <span>* 5 | </span>
          <span>Terjual 5</span>
        </div>
      </div>
    </div>
  </div>
);

export default CardItem;
