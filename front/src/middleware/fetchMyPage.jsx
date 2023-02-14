import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMyPage = createAsyncThunk("mypage/fetchMyPage", async (mypageData) => {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:8080/mypage",
      data: mypageData,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchMyNftList = createAsyncThunk("mypage/fetchMyNftList", async (mypageData) => {
  console.log("axios값", mypageData);
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:8080/mypage/heartlist",
      data: mypageData,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
