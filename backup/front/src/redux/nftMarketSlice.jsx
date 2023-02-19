// 컨트랙트에서 데이터 가져오기
import { fetchNftList } from "@/middleware/fetchNFT";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  image: "",
};
