import { createSlice } from "@reduxjs/toolkit";
import { fetchBringData, fetchDetailPage } from "@/middleware/fetchFund";

const initialState = {
  isBring: false,
  data: [],
  page: [],
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
      })
      .addCase(fetchDetailPage.fulfilled, (state, action) => {
        state.page = action.payload;
      });
  },
});
export const { fundListAction } = fundListSlice.actions;

export default fundListSlice;
