import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 회원가입
export const fetchUserCreated = createAsyncThunk("user/fetchUser", async (createUser: object, thunkAPI) => {
  console.log(createUser);
  try {
    const UserCreated = await axios.post("signup/user", createUser);
    console.log(UserCreated.data);
    // 아마.. 회원가입이 되면 true를 반환해줄듯..?
    return UserCreated.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
    console.log(error);
  }
});

// 지갑주소가 DB에 있나 확인
export const fetchUserCheck = createAsyncThunk("user/fetchUserCheck", async (account: string) => {
  console.log(account);
  try {
    const accountCheck = await axios.post("login/user", account);
    console.log("회원 여부 확인 : ", accountCheck.data);
    // 여기서 데이터 응답 타입 보고 state에 dispatch 해줄지 결정하기
    return accountCheck.data;
  } catch (error) {
    console.log(error);
  }
});
