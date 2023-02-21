import { createSlice } from "@reduxjs/toolkit";
import { fetchNormalMusicList, fetchFundMusicList, fetchPlayList, fetchNewMusicList, fetchGenreList } from "@/middleware/fetchMusic";

const initialState = {
  normalMusicList: [],
  fundMusicList: [],
  newMusicList: [],
  playList: [],
  likeMusicList: [],
  musicGenreList: [],
};

const musicSlice = createSlice({
  name: "musicInfo",
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
      })
      .addCase(fetchPlayList.pending, (state) => {
        state.playList = [];
      })
      .addCase(fetchPlayList.fulfilled, (state, action) => {
        console.log("플레이리스트 액션 페이로드", action.payload);
        state.playList = action.payload;
      })
      .addCase(fetchPlayList.rejected, (state) => {
        state.playList = [];
      })
      .addCase(fetchNewMusicList.pending, (state) => {
        state.newMusicList = [];
      })
      .addCase(fetchNewMusicList.fulfilled, (state, action) => {
        state.newMusicList = action.payload;
      })
      .addCase(fetchNewMusicList.rejected, (state) => {
        state.newMusicList = [];
      })
      .addCase(fetchGenreList.pending, (state) => {
        state.musicGenreList = [];
      })
      .addCase(fetchGenreList.fulfilled, (state, action) => {
        console.log("장르 음악 페이로드", action.payload);
        state.musicGenreList = action.payload;
      })
      .addCase(fetchGenreList.rejected, (state) => {
        state.musicGenreList = [];
      });
  },
});

export default musicSlice;
