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
  name: "user",
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭>으로 지정
    addressUpdate: (state, action: PayloadAction<string>) => {},
  },
  extraReducers: {},
});
