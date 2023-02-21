import { createSlice } from "@reduxjs/toolkit";
import { fetchBringData } from "@/middleware/fetchFund";

const initialState = {
  isBring: false,
  data: [],
};

const fundListSlice = createSlice({
  name: "fundList",
  initialState,
  reducers: {
    reset: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBringData.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchBringData.fulfilled, (state, action) => {
        state.data = action.payload;
        console.log("ziziziziziziz", state.data);
      });
  },
});

export const { fundListAction } = fundListSlice.actions;

export default fundListSlice;
