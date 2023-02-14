import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMakeIPFS = createAsyncThunk(
  "fund/makeMetadata",
  async (_data) => {
    const _formData = new FormData();
    _formData.append("file", _data);
    console.log("ipfs등록 이미지", _data);
    try {
      const _recieveMetadata = await axios.post(
        "http://127.0.0.1:4000/create-fund/create/metadata", // 여기 사용하는 back 주소
        _data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // DB에서 회원이면 유저정보 주고 아니면 createStatus만 반환
      return _recieveMetadata.data;
    } catch (error) {
      console.log("메타데이터 생성 에러");
    }
  }
);

export const fetchCreateFund = createAsyncThunk(
  "fund/createFund",
  async (_data) => {
    try {
      const _recieveMetadata = await axios.post(
        "http://127.0.0.1:4000/create-fund/create/fund", // 여기 사용하는 back 주소
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
