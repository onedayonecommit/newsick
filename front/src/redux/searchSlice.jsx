import { fetchSearch } from "@/middleware/fetchSearch";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: [], // 4개의 배열을 반환받는데 1. 펀딩에서 펀딩 제목의 검색 2. 펀딩 뮤직에서 제목 검색 3. 노말 뮤직에서 제목 검색 4. nft name기준 검색
};

const searchSlice = createSlice({
  name: "searchWord",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, () => {})
      .addCase(fetchSearch.fulfilled, (state, action) => {
        if (action.payload) {
          console.log(action.payload, "서치 결과");
          state.searchResult = action.payload;
        }
      });
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
