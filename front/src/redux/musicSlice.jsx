import { createSlice } from "@reduxjs/toolkit";
import { fetchNormalMusicList, fetchFundMusicList, fetchNewMusicList } from "@/middleware/fetchMusic";

const initialState = {
  normalMusicList: [],
  fundMusicList: [],
  newMusicList: [],
};

const musicSlice = createSlice({
  name: "musicList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNormalMusicList.pending, (state) => {
        state.normalMusicList = [];
      })
      .addCase(fetchNormalMusicList.fulfilled, (state, action) => {
        state.normalMusicList = action.payload;
      })
      .addCase(fetchNormalMusicList.rejected, (state) => {
        state.normalMusicList = [];
      })
      .addCase(fetchFundMusicList.pending, (state) => {
        state.fundMusicList = [];
      })
      .addCase(fetchFundMusicList.fulfilled, (state, action) => {
        state.fundMusicList = action.payload;
      })
      .addCase(fetchFundMusicList.rejected, (state) => {
        state.fundMusicList = [];
      });
    // .addCase(fetchNewMusicList.pending, (state) => {
    //   state.newMusicList = [];
    // })
    // .addCase(fetchNewMusicList.fulfilled, (state, action) => {
    //   state.newMusicList = action.payload;
    // })
    // .addCase(fetchNewMusicList.rejected, (state) => {
    //   state.newMusicList = [];
    // });
  },
});

export default musicSlice;
