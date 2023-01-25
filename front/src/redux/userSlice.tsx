import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    address: "",
  },
  reducers: {
    addressUpdate: (state, action: PayloadAction<string>) => {},
  },
});
