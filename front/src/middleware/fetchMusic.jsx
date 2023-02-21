import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 일반음원 목록 가져오기
export const fetchNormalMusicList = createAsyncThunk("music/fetchNormalMusicList", async () => {
  try {
    const NormalMusicList = await axios.get("https://www.poopoobin.com/music-main-list/normal/list/all");
    console.log("일반음원 목록", NormalMusicList.data);
    return NormalMusicList.data;
  } catch (err) {
    console.log("일반음원 목록 불러오기 에러");
  }
});

// 펀딩 음원 목록
export const fetchFundMusicList = createAsyncThunk("music/fetchFundMusicList", async () => {
  try {
    const fundMusicList = await axios.get("https://www.poopoobin.com/music-main-list/funding/list/all");
    console.log("펀딩 음원 목록", fundMusicList);
    return fundMusicList.data;
  } catch (err) {
    console.log("펀딩 음원 목록 불러오기 에러");
  }
});

// 신규 음원 목록
export const fetchNewMusicList = createAsyncThunk("music/fetchNewMusicList", async () => {
  try {
    const newMusicList = await axios.get("https://www.poopoobin.com/music-main-list/newMusic");
    console.log("신규 음원 목록", newMusicList);
    return newMusicList.data;
  } catch (err) {
    console.log("신규 음원 목록 불러오기 에러");
  }
});

// 플레이리스트 불러오기
export const fetchPlayList = createAsyncThunk("music/fetchPlayList", async (user_wallet_address) => {
  try {
    const playList = await axios.post("https://www.poopoobin.com/playlist", user_wallet_address);
    console.log("받아온 플레이리스트", playList.data);
    return playList.data;
  } catch (error) {
    console.log("플레이리스트 에러");
  }
});

export const fetchGenreList = createAsyncThunk("music/fetchGenreList", async (genre) => {
  try {
    const genreList = await axios.get(`https://www.poopoobin.com/music-genre-list/?genre=${genre}`);
    console.log("장르장르", genreList.data);
    return genreList.data;
  } catch (err) {
    console.log("장르 리스트 에러");
  }
});
