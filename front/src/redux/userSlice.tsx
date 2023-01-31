import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserCreated } from "../middleware/fetchUser";

export interface userState {
  address: string;
  userName: string;
  userEmail: string;
  isCreator: boolean;
  createStatus: boolean;
}

const initialState: userState = {
  address: "0x4a48cb2d163b71ce587b5d11abecf4bf36962183",
  userName: "1",
  userEmail: "11@gmail.com",
  isCreator: false,
  createStatus: true,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // PayloadAction은 액션의 payload 타입을 지정할 수 있게 해주는 제네릭이다.
    addressCheck: (state: userState, action: PayloadAction<string>) => {
      console.log("계정 : ", action.payload);
      // state.address = action.payload;
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
