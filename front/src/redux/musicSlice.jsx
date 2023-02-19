import { createSlice } from "@reduxjs/toolkit";
import { fetchNormalMusicList } from "@/middleware/fetchMusic";

const initialState = {
  normalMusicList: [],
  fundMusicList: [],
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
      });
  },
});

export default musicSlice;
