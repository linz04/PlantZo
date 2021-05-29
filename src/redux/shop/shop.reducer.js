import { shopActionTypes } from "./shop.types";
import SHOP_DATA from "./shop.data";

const { SET_SHOP_ITEMS } = shopActionTypes;

const INITIAL_STATE = {
  items: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case SET_SHOP_ITEMS:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};

export default shopReducer;
