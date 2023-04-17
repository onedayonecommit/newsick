import { NEWSIC_FUND_ABI, NEWSIC_FUND_CA } from "@/web3.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Web3 from "web3";

export const fetchMyPage = createAsyncThunk("mypage/fetchMyPage", async (mypageData) => {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:8080/mypage/second",
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

export const myNftList = createAsyncThunk("mypage/myNftList", async (user_wallet_address) => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(NEWSIC_FUND_ABI, NEWSIC_FUND_CA);
  try {
    const myNftListArr = await contract.methods.totalUri().call({ from: user_wallet_address });
    const result = async () => {
      const arr = await Promise.all(
        myNftListArr.map(async (e) => {
          const res = await fetch(e.uri);
          const data = await res.json();
          console.log("빠로드 데타", data);
          return { data, tokenId: e.tokenId };
        })
      );
      console.log("빠로드 배열");
      return arr;
    };
    console.log(await result(), "신기술");
    return await result();
  } catch (error) {
    console.log(error);
  }
});

export const myRunningFundList = createAsyncThunk("mypage/running-fund", async (user_wallet_address) => {
  try {
    console.log("통신 시작");
    const myFundingList = await axios({
      method: "post",
      url: "http://localhost:8080/mypage/creator/running-fund",
      data: user_wallet_address,
    });
    console.log(myFundingList.data, "ssissississi");
    return myFundingList.data;
  } catch (error) {
    console.log(error);
  }
});

export const getNotice = createAsyncThunk("fund/notice/get", async (data) => {
  try {
    const getNoticeList = await axios({
      method: "post",
      url: "http://localhost:8080/fund/notice/get",
      data: data,
    });
    return getNoticeList.data;
  } catch (error) {
    console.log(error);
  }
});
