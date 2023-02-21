import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  excuteContract: false,
};

const eventSlice = createSlice({
  name: "eventView",
  initialState,
  reducers: {
    excuteStatus: (state, action) => {
      console.log("컨트랙트 실행되면 로딩창", action.payload);
      state.excuteContract = action.payload;
      console.log("업데이트 된 컨트랙트 실행", state.excuteContract);
    },
  },
});

export const eventAction = eventSlice.actions;

export default eventSlice;
