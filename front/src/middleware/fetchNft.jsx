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
    console.log(detailList[0], "detailList");
    console.log(detailList[1], "detailList");
    return detailList;
  } catch (error) {
    console.log(error);
  }
});

// export const myNftAmount = createAsyncThunk("marketDetailAmount", async (tokenId, user_wallet_address) => {
//   const web3 = new Web3(window.ethereum);
//   const contract = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
//   try {
//     const myNftAmount = await contract.methods.balanceOf(user_wallet_address,tokenId)
//   } catch (error) {

//   }
// })

export const marketDetailInfo = createAsyncThunk("market-funding-detail-list-backend", async (id) => {
  const result = await axios({
    method: "get",
    url: `https://www.poopoobin.com/market-funding-list/${id}`,
  });
  console.log(result.data, "마켓디테일");
  return result.data;
});

export const marketDetailBuy = createAsyncThunk("market_detail_buy", async (data) => {
  const { tokenId, amountOfToken, price } = data;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
  try {
    const buyResult = await contract.methods._createBuyList(tokenId, amountOfToken, price);
    console.log(buyResult.events.BuyEvent.returnValues._status);
  } catch (error) {}
});

export const marketDetailSell = createAsyncThunk("market_detail_sell", async (data) => {
  const { tokenId, amountOfToken, price } = data;
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(NEWSIC_MARKET_ABI, NEWSIC_MARKET_CA);
  try {
    const sellResult = await contract.methods._createSellList(tokenId, amountOfToken, price);
  } catch (error) {}
});
