import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCreated, fetchUserCheck, fetchUserImage, fetchApplyCreator } from "../middleware/fetchUser";

const initialState = {
  address: "",
  userName: "",
  userEmail: "",
  userImage: "default_profile_image.jpeg",
  isCreator: false,
  createStatus: false,
  // 구독권 state 만들기
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
        if (action.payload.createStatus != false) {
          state.address = action.payload.user_wallet_address;
          state.userName = action.payload.user_name;
          state.userEmail = action.payload.user_email;
          state.userImage = action.payload.user_profile_image;
          state.isCreator = action.payload.creator[0].is_creator;
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
          if (typeof action.payload == "string") alert(`이미 사용중인 ${action.payload} 입니다.`);
          else {
            state.address = action.payload.user_wallet_address;
            state.userName = action.payload.user_name;
            state.userEmail = action.payload.user_email;
            state.userImage = action.payload.user_profile_image;
            state.createStatus = action.payload.createStatus;
            alert("회원가입 추카추");

            console.log("넘어온 유저정보 : ", action.payload);
            console.log("업데이트 시킨 state : ", state);
          }
        }
      })
      // 유저 프로필 사진 변경
      .addCase(fetchUserCreated.rejected, (state) => {
        state = initialState;
      })
      .addCase(fetchUserImage.pending, (state) => {
        state.userImage;
      })
      .addCase(fetchUserImage.fulfilled, (state) => {
        state.userImage = action.payload.file;
      })
      .addCase(fetchUserImage.rejected, (state) => {
        state.userImage;
      })
      .addCase(fetchApplyCreator.fulfilled, (state, action) => {
        if (action.payload) {
          console.log("creator apply", action.payload);
          state.isCreator = action.payload.is_creator;
        }
      });
  },
});

export const userAction = userSlice.actions;

export default userSlice;
