import { fetchMyNftList, fetchMyPage, myNftList, myRunningFundList } from "@/middleware/fetchMypage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heart_funding: [],
  heart_music: [],
  heart_nft: [],
  playlist: [],
  myNftList: [],
  runningFundList: [],
};
const myPageSlice = createSlice({
  name: "myPageInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyPage.pending, (state) => {})
      .addCase(fetchMyPage.fulfilled, (state, action) => {
        if (action.payload) {
          state.heart_funding = action.payload.heart_funding;
          state.heart_music = action.payload.heart_music;
          state.playlist = action.payload.playlist;
        }
      })
      .addCase(fetchMyPage.rejected, (state, action) => {})
      .addCase(fetchMyNftList.pending, () => {})
      .addCase(fetchMyNftList.fulfilled, (state, action) => {
        if (action.payload) {
          console.log(action.payload);
          state.heart_nft = action.payload.nftList;
          state.heart_funding = action.payload.fundingList;
          console.log("액쎤 쓰떼이또1", state.heart_funding);
          console.log("액쎤 쓰떼이또2", state.heart_nft);
        }
      })
      .addCase(myNftList.pending, () => {})
      .addCase(myNftList.fulfilled, (state, action) => {
        console.log(action.payload, "빠로드");
        state.myNftList = action.payload;
      })
      .addCase(myRunningFundList.pending, () => {})
      .addCase(myRunningFundList.fulfilled, (state, action) => {
        console.log(action.payload, "ssibalssiabl");
        if (action.payload) {
          console.log(action.payload, "ssississi2");
          state.runningFundList = action.payload;
        }
      })
      .addCase(myRunningFundList.rejected, () => {
        console.log("거절됌");
      });
  },
});

export const myPageAction = myPageSlice.actions;
export default myPageSlice;
