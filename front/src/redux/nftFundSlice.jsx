//
import { createSlice } from "@reduxjs/toolkit";
import { fetchMakeIPFS } from "@/middleware/fetchFund";

const initialState = {
  fileUrl: "",
  metadataUrl: "",
  // 펀딩 정보 받는거 데이터넣을곳
  // userEmail: "",
  // userImage: "",
  // isCreator: false,
  createStatus: false,
};

const nftFundSlice = createSlice({
  name: "fundInfo",
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
      .addCase(fetchMakeIPFS.pending, (state) => {
        state.createStatus = false;
      })
      .addCase(fetchMakeIPFS.fulfilled, (state, action) => {
        state.createStatus = true;

        // state.fileUrl = action.payload.fileUrl;
        // state.metadataUrl = action.payload.metadataUrl;
        console.log("넘어온 ipfs정보 : ", action);
        console.log("넘어온 ipfs정보 : ", state);
      })
      .addCase(fetchMakeIPFS.rejected, (state) => {
        state.createStatus = false;
      });
    //   .addCase(fetchUserCreated.pending, (state) => {
    //     state = initialState;
    //   })
    //   .addCase(fetchUserCreated.fulfilled, (state, action) => {
    //     if (typeof action.payload == "string") alert(action.payload);
    //     else {
    //       state.address = action.payload.user_wallet_address;
    //       state.userName = action.payload.user_name;
    //       state.userEmail = action.payload.user_email;
    //       state.userImage = action.payload.user_profile_image;
    //       state.isCreator = action.payload.is_creator;
    //       state.createStatus = action.payload.createStatus;
    //       alert("회원가입 추카추");

    //       console.log("넘어온 유저정보 : ", action.payload);
    //       console.log("업데이트 시킨 state : ", state);
    //     }
    //   })
    //   .addCase(fetchUserCreated.rejected, (state) => {
    //     state = initialState;
    //   });
  },
});

export const { nftFundAction } = nftFundSlice.actions;

export default nftFundSlice;
