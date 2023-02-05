import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCreated, fetchUserCheck } from "../middleware/fetchUser";

const initialState = {
  address: "",
  userName: "",
  userEmail: "",
  isCreator: false,
  createStatus: false,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addressCheck: (state, action) => {
      state.address = action.payload;
      console.log("계정 : ", state.address);
    },
    reset: (state, action) => {
      state = action.payload;
      console.log("초기화된 state : ", action.payload);
    },
  },
  extraReducers: (builder) => {
    // return 방식을 사용해서 state 값을 복사해서 새로운 state의 값으로 씌워버리기
    builder
      .addCase(fetchUserCheck.pending, (state) => {
        state.createStatus = false;
      })
      .addCase(fetchUserCheck.fulfilled, (state, action) => {
        state.createStatus = action.payload;
        console.log("회원가입 status : ", action.payload);
      })
      .addCase(fetchUserCheck.rejected, (state) => {
        state.createStatus = false;
      })
      .addCase(fetchUserCreated.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchUserCreated.fulfilled, (state, action) => {
        state = action.payload;
        console.log("유저정보 : ", action.payload);
      })
      .addCase(fetchUserCreated.rejected, (state) => {
        state = initialState;
      });
  },
});

export const userAction = userSlice.actions;

export default userSlice;
