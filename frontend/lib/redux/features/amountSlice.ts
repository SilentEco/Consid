import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface amount {
  price: number;
}

const initialState: amount = {
  price: 0,
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    addAmount: (state, action: PayloadAction<number>) => {
      state.price += action.payload;
    },
    removeAmount: (state, action: PayloadAction<number>) => {
      state.price -= action.payload;
    },
  },
});

export const { addAmount, removeAmount } = amountSlice.actions;
export default amountSlice.reducer;
