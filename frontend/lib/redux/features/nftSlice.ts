import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface nft {
  name: string;
  price: number;
  image: string;
}

interface nftState {
  value: nft[];
}

const initialState: nftState = {
  value: [],
};

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    addNFT: (state, action: PayloadAction<nft>) => {
      state.value.push(action.payload);
    },
    removeNFT: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex((i: any) => {
        return i.name === action.payload;
      });
      state.value.splice(index, 1);
    },
  },
});

export const { addNFT, removeNFT } = nftSlice.actions;
export default nftSlice.reducer;
