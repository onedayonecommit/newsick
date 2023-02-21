import { createSlice } from "@reduxjs/toolkit";
import { fetchBringData, fetchPopularPick } from "@/middleware/fetchFund";

const initialState = {
  isDataBring: false,
  isPopularBring: false,
  popular: [],
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
      .addCase(fetchPopularPick.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchPopularPick.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.isPopularBring = true;
      })
      .addCase(fetchPopularPick.rejected, (state) => {
        state.isPopularBring = false;
      })
      .addCase(fetchBringData.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchBringData.fulfilled, (state, action) => {
        // console.log("ohohohohoh", action.payload);
        state.data = action.payload;
        state.isBring = true;
        // console.log("yayayyya", state.data);
      })
      .addCase(fetchBringData.rejected, (state) => {
        state.isBring = false;
      });
  },
});

export const { fundListAction } = fundListSlice.actions;
export default fundListSlice;
