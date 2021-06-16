import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { deleteItem } from "../redux/cart/cart.actions";
import { setComments } from "../redux/shop/shop.actions";
import { selectCurrentUser } from "../redux/user/user.selectors";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rating({ item, history }) {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { uid } = currentUser;
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [textArea, setTextArea] = useState("");
  const stars = Array(5).fill(0);

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const { pid } = item;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setComments({ currentValue, textArea }));

    axios.post("/comments", { currentValue, textArea, uid, pid });
    dispatch(deleteItem(item));
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col justify-center item-center text-center w-screen">
      <h2 className="font-serif font-bold text-2xl mb-5">
        {" "}
        Silahkan Beri Penilaian Terhadap Produk Ini{" "}
      </h2>
      <div className="flex flex-row justify-center my-5">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={48}
              onClick={() => {
                handleClick(index + 1);
              }}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <div className="my-5 w-screen">
        <textarea
          className=" w-screen h-48"
          placeholder="What's your experience?"
          onChange={(e) => setTextArea(e.target.value)}
        />
      </div>
      <div className="flex justify-center md:justify-end md:mr-40 text-black">
        <button
          className="btn ml-2 p-5 bg-blue-300 border-blue-500 hover:bg-blue-800 hover:text-white transition ease-out duration 500 "
          onClick={handleSubmit}
        >
          Kirim Penilaian
        </button>
      </div>
    </div>
  );
}
export default withRouter(Rating);
