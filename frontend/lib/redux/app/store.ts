import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nftReducer from "../features/nftSlice";
import amountReducer from "../features/amountSlice";
import cartReducer from "../features/shoppingcartSlice";
import storage from "../storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const combinedReducers = combineReducers({
  cartReducer,
  amountReducer,
  nftReducer,
});
const persist = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: {
    nft: persist,
    amount: persist,
    cart: persist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
