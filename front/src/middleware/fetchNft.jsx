import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// NFT 판매중인 목록 가져오기
export const fetchNftList = createAsyncThunk("NFT/fetchNftList", async () => {
  try {
    const nftList = await axios.get("url");
    console.log(nftList.data);
  } catch (error) {
    console.log(error);
  }
});
