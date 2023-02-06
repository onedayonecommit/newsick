import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

// axios로 보낼 때 key를 back이랑 동일하게 써서 보내주어야함!!

// const dispatch = useDispatch();

// 회원가입
export const fetchUserCreated = createAsyncThunk("user/fetchUser", async (createUser, thunkAPI) => {
  console.log(createUser);
  try {
    const UserCreated = await axios.post("192.168.0.169:8080/user/join", createUser);
    console.log(UserCreated.data);
    // 유저가 되면 유저의 정보를 응답
    return UserCreated.data;
  } catch (error) {
    // return thunkAPI.rejectWithValue({ errorMessage: "알 수 없는 에러가 발생했습니다." });
    console.log(error);
  }
});

// 지갑주소가 DB에 있나 확인
export const fetchUserCheck = createAsyncThunk("user/fetchUserCheck", async (account) => {
  console.log("DB에 넘겨주는 계정", account);
  try {
    const accountCheck = await axios.post("192.168.0.169:8080/user/login", account);
    // 아마.. 회원가입이 되면 true를 반환해줄듯..?
    console.log("회원 여부 확인 : ", accountCheck.data);
    // 여기서 데이터 응답 타입 보고 state에 dispatch 해줄지 결정하기
    return accountCheck.data;
  } catch (error) {
    console.log(error);
  }
});
