import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import itemReducer from "./item/item.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  item: itemReducer,
});

export default persistReducer(persistConfig, rootReducer);
