// 컨트랙트에서 데이터 가져오기
import { marketDetail, marketDetailInfo, marketNftList } from "@/middleware/fetchNFT";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  funding_list: [],
  detail_offer_info: [],
  detail_sell_info: [],
  detail_fund_info: {},
};

const marketSlice = createSlice({
  name: "marketInfo",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(marketNftList.pending, (state) => {})
      .addCase(marketNftList.fulfilled, (state, action) => {
        if (action.payload) {
          console.log(action.payload, "market 스테이또");
          state.funding_list = action.payload;
        }
      })
      .addCase(marketDetail.pending, (state) => {})
      .addCase(marketDetail.fulfilled, (state, action) => {
        if (action.payload) {
          state.detail_info = action.payload;
          console.log(state.detail_info);
        }
      })
      .addCase(marketDetailInfo.pending, () => {})
      .addCase(marketDetailInfo.fulfilled, (state, action) => {
        state.detail_fund_info = action.payload;
      });
  },
});

export const marketAction = marketSlice.actions;
export default marketSlice;
