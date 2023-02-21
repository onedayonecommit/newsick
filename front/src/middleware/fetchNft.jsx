import useWeb3 from "@/hooks/useWeb3";
import { NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA } from "@/web3.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Web3 from "web3";

// NFT 판매중인 목록 가져오기
export const marketNftList = createAsyncThunk("market-funding-list-backend", async () => {
  try {
    const nftList = await axios({ url: "https://www.poopoobin.com/market-funding-list/all", method: "get" });
    console.log(nftList.data);
    return nftList.data;
  } catch (error) {
    console.log(error);
  }
});

export const marketDetail = createAsyncThunk("market-funding-list-contract", async (_tokenId) => {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
  try {
    const detailList = await contract.methods._offers(Number(_tokenId)).call();
    console.log(detailList, "detailList");
  } catch (error) {
    console.log(error);
  }
});

export const marketDetailInfo = createAsyncThunk("market-funding-detail-list-backend", async (id) => {
  const result = await axios({
    method: "get",
    url: `https://www.poopoobin.com/market-funding-list/${id}`,
  });
  console.log(result.data, "마켓디테일");
  return result.data;
});
