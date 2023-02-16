import { fetchMyNftList, fetchMyPage } from "@/middleware/fetchMyPage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heart_funding: [],
  heart_music: [],
  heart_nft: [],
  playlist: [],
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
        // console.log("액쎤 빠로드", action.payload.fundingList);
        if (action.payload) {
          state.heart_nft = action.payload.nftList;
          state.heart_funding = action.payload.fundingList;
          console.log("액쎤 쓰떼이또", state.heart_funding);
        }
      });
  },
});

export const myPageAction = myPageSlice.actions;
export default myPageSlice;
