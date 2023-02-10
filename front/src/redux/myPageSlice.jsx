import { fetchMyPage } from "@/middleware/fetchMypage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heart_funding: [],
  heart_music: [],
  playlist: [],
};

const myPageSlice = createSlice({
  name: "myPageInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyPage.pending, (state) => {});
    builder.addCase(fetchMyPage.fulfilled, (state, action) => {
      if (action.payload) {
        state.heart_funding = action.payload.heart_funding;
        state.heart_music = action.payload.heart_music;
        state.playlist = action.payload.playlist;
      }
    });
    builder.addCase(fetchMyPage.rejected, (state, action) => {});
  },
});

export const myPageAction = myPageSlice.actions;
export default myPageSlice;
