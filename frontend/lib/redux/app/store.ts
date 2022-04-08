import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paintingReducer from "../features/paintingSlice";
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
  paintingReducer,
});
const persist = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: {
    painting: persist,
    amount: persist,
    cart: persist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
