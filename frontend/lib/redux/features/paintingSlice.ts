import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Painting {
  name: string;
  price: number;
  image: string;
  frame: string;
  background: string;
  size: string;
}

interface PaintingState {
  value: Painting[];
}

const initialState: PaintingState = {
  value: [],
};

export const paintingSlice = createSlice({
  name: "painting",
  initialState,
  reducers: {
    addPainting: (state, action: PayloadAction<Painting>) => {
      state.value.push(action.payload);
    },
    removePainting: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex((i: any) => {
        return i.name === action.payload;
      });
      state.value.splice(index, 1);
    },
  },
});

export const { addPainting, removePainting } = paintingSlice.actions;
export default paintingSlice.reducer;
