import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
  address: string;
  userName: string;
  userEmail: string;
  token: string;
}

const initialState: userState = {
  address: "",
  userName: "",
  userEmail: "",
  token: "",
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭>으로 지정
    addressUpdate: (state: userState, action: PayloadAction<string>) => {
      console.log("계정 : ", action.payload);
      state.address = action.payload;
    },
  },
  extraReducers: {
    // return 방식을 사용해서 state 값을 복사해서 새로운 state의 값으로 씌워버리기
  },
});

export const userAction = userSlice.actions;

export default userSlice;
