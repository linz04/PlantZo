import React from "react";

const CheckoutItem = ({ item }) => {
  const {
    imageUrl = "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name = "JUDUL",
    price = 1,
    quantity = 2,
  } = item;

  return (
    <div>
      <div>Hai</div>
      <div className="w-40 h-49">
        <img src={imageUrl} />
      </div>
      <div>saya Adjie</div>
    </div>
  );
};

export default CheckoutItem;
