import React from "react";
import { withRouter } from "react-router";

const CardItem = ({ item = {}, history, match }) => {
  const {
    name = "Tanaman",
    imageUrl = "/",
    pid = 1,
    price = 1,
    start = 3,
    sold = 24,
  } = item;

  let nameEdited = name;

  if (name.length > 16) {
    nameEdited = [name.slice(0, 14), "..."].join("");
  }

  const startArray = Array.from(new Array(Math.floor(start)));

  return (
    <div
      className="flex flex-col items-center w-72 h-full bg-gray-100 m-2 cursor-pointer"
      onClick={() => history.push(`shop/${pid}`)}
    >
      <div className="m-2">
        <img src={imageUrl} alt="Item" />
        <div className="flex flex-col justify-center items-start mt-2">
          <h3 className="text-3xl">{nameEdited}</h3>
          <p className="text-2xl font-semibold">RP {price}</p>
          <div className="text-2xl">
            <span className="flex">
              {startArray.map((x, idx) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  key={idx}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-lg text-gray-500">Terjual {sold}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CardItem);
