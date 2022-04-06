import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const shoppingcartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value++;
    },
    removeFromCart: (state) => {
      state.value--;
    },
  },
});

export const { addToCart, removeFromCart } = shoppingcartSlice.actions;
export default shoppingcartSlice.reducer;
