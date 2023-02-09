import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCreated, fetchUserCheck } from "../middleware/fetchUser";

const initialState = {
  address: "",
  userName: "",
  userEmail: "",
  userImage: "",
  isCreator: false,
  createStatus: false,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
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
        if (action.payload) {
          state.address = action.payload.user_wallet_address;
          state.userName = action.payload.user_name;
          state.userEmail = action.payload.user_email;
          state.userImage = action.payload.user_profile_image;
          state.isCreator = action.payload.is_creator;
          state.createStatus = action.payload.createStatus;
          console.log("넘어온 유저정보 : ", action.payload);
        }
      })
      .addCase(fetchUserCheck.rejected, (state) => {
        state.createStatus = false;
      })
      .addCase(fetchUserCreated.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchUserCreated.fulfilled, (state, action) => {
        // console.log(typeof action.payload);
        // console.log(typeof action.payload == "string");
        if (action.payload) {
          if (typeof action.payload == "string") alert(action.payload);
          else {
            state.address = action.payload.user_wallet_address;
            state.userName = action.payload.user_name;
            state.userEmail = action.payload.user_email;
            state.userImage = action.payload.user_profile_image;
            state.isCreator = action.payload.is_creator;
            state.createStatus = action.payload.createStatus;
            alert("회원가입 추카추");

            console.log("넘어온 유저정보 : ", action.payload);
            console.log("업데이트 시킨 state : ", state);
          }
        }
      })
      .addCase(fetchUserCreated.rejected, (state) => {
        state = initialState;
      });
  },
});

export const userAction = userSlice.actions;

export default userSlice;
