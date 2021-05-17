import { itemActionTypes } from "./item.types";

const { INCREASE_QUANTITY, DECREASE_QUANTITY } = itemActionTypes;

const INITIAL_STATE = {
  item: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return {
        ...state,
        quantity: action.payload + 1,
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        quantity: action.payload - 1,
      };
    default:
      return state;
  }
};

export default itemReducer;
