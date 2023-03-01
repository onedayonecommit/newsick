import { createSlice } from "@reduxjs/toolkit";
import { fetchBringData, fetchDetailInfo, fetchDetailPage, fetchPopularPick } from "@/middleware/fetchFund";

const initialState = {
  isBring: false,
  data: [],
  top1: {},
  detailInfo: [],
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
      .addCase(fetchPopularPick.pending, (state, action) => {})
      .addCase(fetchPopularPick.fulfilled, (state, action) => {
        state.top1 = action.payload;
      })
      // .addCase(fetchDetailInfo.pending, () => {})
      .addCase(fetchDetailInfo.fulfilled, (state, action) => {
        if (action.payload) {
          console.log("통신 후 받은 데이터", action.payload);
          state.detailInfo = action.payload;
          console.log(state.detailInfo, "통신 후 스테이트");
        }
      })
      .addCase(fetchDetailPage.fulfilled, (state, action) => {
        state.page = action.payload;
      });
  },
});
export const { fundListAction } = fundListSlice.actions;

export default fundListSlice;
