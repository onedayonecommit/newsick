import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type user = {
  address: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    address: "",
  },
  reducers: {
    addressUpdate: (state, action: PayloadAction<string>) => {},
  },
});
