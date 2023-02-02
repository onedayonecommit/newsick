import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCreated } from "../middleware/fetchUser";

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
    // PayloadAction은 액션의 payload 타입을 지정할 수 있게 해주는 제네릭이다.
    addressCheck: (state, action) => {
      state.address = action.payload;
      console.log("계정 : ", state.address);
    },
    // signUpCheck: (state: userState, action: PayloadAction<boolean>) => {
    //   state.createStatus = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // return 방식을 사용해서 state 값을 복사해서 새로운 state의 값으로 씌워버리기
    builder
      .addCase(fetchUserCreated.pending, (state) => {
        state.createStatus = false;
      })
      .addCase(fetchUserCreated.fulfilled, (state, action) => {
        state.createStatus = action.payload;
        console.log("회원가입 status : ", action.payload);
      })
      .addCase(fetchUserCreated.rejected, (state) => {
        state.createStatus = false;
      });
  },
});

export const userAction = userSlice.actions;

export default userSlice;
