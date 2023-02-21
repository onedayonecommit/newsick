import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMakeIPFS = createAsyncThunk(
  "fund/metadata",
  async (_formData) => {
    console.log(_formData);
    console.log(_formData.get("nft_image"));
    try {
      const _recieveMetadata = await axios({
        method: "post",
        url: "https://www.poopoobin.com/create-fund/create/makeMetadata",
        data: _formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("메타데이터:", _recieveMetadata);
      return _recieveMetadata.data;
    } catch (error) {
      console.log("메타데이터 생성 에러ddddddd");
      return;
    }
  }
);

export const fetchCreateFund = createAsyncThunk(
  "fund/createFund",
  async (_data) => {
    try {
      const _recieveMetadata = await axios.post(
        "https://www.poopoobin.com/create-fund/create/fund", // 여기 사용하는 back 주소
        _data
      );
      // DB에서 회원이면 유저정보 주고 아니면 createStatus만 반환
      console.log("메타메이터 확인 : ", _recieveMetadata.data);
      return _recieveMetadata.data;
    } catch (error) {
      console.log("메타데이터 생성 에러");
    }
  }
);

// 인기있는 펀딩 가져오기
export const fetchPopularPick = createAsyncThunk(
  "fund/popularPick",
  async () => {
    try {
      const _recieveData = await axios.post(
        "https://www.poopoobin.com/hot-fund/top1"
      );
      console.log("top 확인", _recieveData);
      return _recieveData.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// 전체 펀딩 데이터 가져오기
export const fetchBringData = createAsyncThunk("fund/allList", async () => {
  try {
    const _recieveMetadata = await axios.post(
      "https://www.poopoobin.com/create-fund/create/fund", // 여기 사용하는 back 주소
      _data
    );
    console.log("들어온 데이터 확인", _recieveData);
    return _recieveData.data;
  } catch (error) {
    console.log(error);
  }
});
