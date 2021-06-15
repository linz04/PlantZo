import { shopActionTypes } from "./shop.types";

const {
  SET_SHOP_ITEMS,
  SET_DEFAULT_QUANTITY_DESIRED,
  SET_DEFAULT_CHECKED,
  SET_DEFAULT_SOLD,
  SET_DEFAULT_STATE,
  SET_COMMENTS,
  SET_DATE,
} = shopActionTypes;

const INITIAL_STATE = {
  items: [],
  comments: {
    comment: "",
    rate: 0,
  },
  date: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
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
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
