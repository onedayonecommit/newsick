import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 일반음원 목록 가져오기
export const fetchNormalMusicList = createAsyncThunk("music/fetchNormalMusicList", async () => {
  try {
    const NormalMusicList = await axios.get("http://localhost:8080/music-main-list/normal/list/all");
    console.log("일반음원 목록", NormalMusicList.data);
    return NormalMusicList.data;
  } catch (err) {
    console.log("일반음원 목록 불러오기 에러");
  }
});

// 펀딩 음원 목록
export const fetchFundMusicList = createAsyncThunk("music/fetchFundMusicList", async () => {
  try {
    const fundMusicList = await axios.get("http://localhost:8080/music-main-list/funding/list/all");
    console.log("펀딩 음원 목록", fundMusicList);
    return fundMusicList.data;
  } catch (err) {
    console.log("펀딩 음원 목록 불러오기 에러");
  }
});

// 신규 음원 목록
export const fetchNewMusicList = createAsyncThunk("music/fetchNewMusicList", async () => {
  try {
    const newMusicList = await axios.get("http://localhost:8080/music-main-list/newMusic");
    console.log("신규 음원 목록", newMusicList);
    return newMusicList.data;
  } catch (err) {
    console.log("신규 음원 목록 불러오기 에러");
  }
});
