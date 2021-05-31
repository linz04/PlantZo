import { shopActionTypes } from "./shop.types";
import SHOP_DATA from "./shop.data";

const {
  SET_SHOP_ITEMS,
  SET_DEFAULT_QUANTITY_DESIRED,
  SET_DEFAULT_CHECKED,
  SET_DEFAULT_SOLD,
  SET_DEFAULT_STATE,
} = shopActionTypes;

const INITIAL_STATE = {
  items: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    case SET_SHOP_ITEMS:
      return { ...state, items: [...action.payload] };
    case SET_DEFAULT_QUANTITY_DESIRED:
      return {
        ...state,
        items: state.items.map((item) => (item.quantityDesired = 0)),
      };
    case SET_DEFAULT_CHECKED:
      return {
        ...state,
        items: state.items.map((item) => (item.checked = false)),
      };
    case SET_DEFAULT_SOLD:
      return {
        ...state,
        items: state.items.map((item) => (item.sold = item.pid)),
      };
    case SET_DEFAULT_STATE:
      return {
        ...state,
        items: state.items.map(
          (item) =>
            (item.state = {
              unpaid: true,
              pack: false,
              send: false,
              rate: false,
            })
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
