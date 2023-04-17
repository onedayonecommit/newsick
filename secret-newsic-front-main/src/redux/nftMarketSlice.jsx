// 컨트랙트에서 데이터 가져오기
import { marketDetail, marketDetailInfo, marketNftList } from "@/middleware/fetchNft";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  funding_list: [],
  detail_offer_info: [],
  detail_sell_info: [],
  detail_fund_info: {},
  my_sell_history: [],
  my_buy_history: [],
};

const marketSlice = createSlice({
  name: "marketSlice",
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
          console.log(action.payload, "엔엪티");
          // const buyOffer = [];
          // const sellOffer = [];
          // for (let i = 0; i < action.payload[0].length; i++){
          //   if (i = 0) { buyOffer.push(action.payload[0][0]) }
          //   else {
          //     buyOffer.map((e, i) => {
          //     if (e[3] == action.payload[0][i][3]) buyOffer[i][3] += action.payload[0][i][3];
          //     else buyOffer.push(action.payload[0][i][3]);
          //     })
          //   }
          // }
          // for (let i = 0; i < action.payload[1].length; i++){
          //   if (i = 0) { sellOffer.push(action.payload[0][0]) }
          //   else {
          //     sellOffer.map((e, i) => {
          //     if (e[3] == action.payload[1][i][3]) sellOffer[i][3] += action.payload[1][i][3];
          //     else sellOffer.push(action.payload[1][i][3]);
          //     })
          //   }
          // }
          state.detail_offer_info = action.payload[0]; // 2중배열
          state.detail_sell_info = action.payload[1]; // 2중배열
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
