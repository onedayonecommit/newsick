import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios로 보낼 때 key를 back이랑 동일하게 써서 보내주어야함!!

// 회원가입
export const fetchUserCreated = createAsyncThunk(
  "user/fetchUser",
  async (createUser, thunkAPI) => {
    console.log(createUser);
    try {
      const UserCreated = await axios.post(
        "http://127.0.0.1:4000/user/join",
        createUser
      );
      console.log(UserCreated.data);
      // 유저가 되면 유저의 정보를 응답
      return UserCreated.data;
    } catch (error) {
      // return thunkAPI.rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
      console.log("회원가입에러");
    }
  }
);
// http://192.168.0.169:8080/user/join

// 지갑주소가 DB에 있나 확인
export const fetchUserCheck = createAsyncThunk(
  "user/fetchUserCheck",
  async (account) => {
    console.log("DB에 넘겨주는 계정", account);
    try {
      const accountCheck = await axios.post(
        "http://127.0.0.1:4000/user/login",
        account
      );
      // DB에서 회원이면 유저정보 주고 아니면 createStatus만 반환
      console.log("회원 여부 확인 : ", accountCheck.data);
      return accountCheck.data;
    } catch (error) {
      console.log("로그인에러");
    }
  }
);
// http://192.168.0.169:8080/user/login

/**유저 프로필 사진 등록 및 변경 */
export const fetchUserImage = createAsyncThunk(
  "user/fetchUserImage",
  async (formData, thunkAPI) => {
    console.log("프로필 사진, 계정", formData);
    try {
      const userProfileImage = await axios({
        method: "post",
        url: "http://localhost:8080/change-info/profile/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return userProfileImage.data;
    } catch (error) {
      return console.log(thunkAPI.rejectWithValue(err.userProfileImage.data));
    }
  }
);

export const fetchApplyCreator = createAsyncThunk(
  "user/fetchApplyCreator",
  async (account) => {
    try {
      const applyCreatorResult = await axios.post(
        "http://localhost:8080/application-creator",
        account
      );
      return applyCreatorResult.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// 하영오빠가 작성한 미들웨어(구독권)
export const fetchBuyTicket = createAsyncThunk(
  "user/fetchBuyTicket",
  async (_data) => {
    console.log("받은거", _data);
    try {
      const _recieveData = await axios.post(
        "http://127.0.0.1:4000/buy-ticket", // 여기 사용하는 back 주소
        _data
      );
      // DB에서 회원이면 유저정보 주고 아니면 createStatus만 반환
      console.log("티켓구매 확인 : ", _recieveData.data);
      return _recieveData.data;
    } catch (error) {
      console.log("티켓구매 에러");
    }
  }
);
