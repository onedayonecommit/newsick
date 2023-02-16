//
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMakeIPFS,
  metadataReady,
  fetchCreateFund,
} from "@/middleware/fetchFund";

const initialState = {
  funding_nft_image: "", // 파일url
  funding_metadata: "", // metadata url
  metadata_ready: false, // metadata 준비됨
  // 펀딩 정보 받는거 데이터넣을곳
  creator_id: "", // 크리에이터 지갑주소
  funding_info: "", // 펀딩제목
  category: "", // 장르 (1:가요, 2:팝, 3:트로트, 4:클래식)
  funding_start_date: "", // 펀딩시작기간
  funding_finish_date: "", // 펀딩종료기간
  funding_production_date: "", // 음원제작기간
  funding_price: 0, // NFT 개당 가격
  funding_min: 0, // NFT 최소 판매개수
  funding_holdershare: 0, // 홀더가 가져갈 퍼센트 몫
  lyrics_maker: {
    lyrics_name: "", // 작사가명
    lyrics_info: "", // 작사가 소개
    lyrics_sex: 0, // 작사가 성별
  },
  music_maker: {
    music_name: "", // 작곡가 명
    music_info: "", // 작곡가 소개
    music_sex: 0, // 작곡가 성별
  },
  singer: {
    singer_name: "", // 가수명
    singer_info: "", // 가수소개
    singer_sex: 0, // 가수성별
  },
  createStatus: false,
};

const nftFundSlice = createSlice({
  name: "fundInfo",
  initialState,
  reducers: {
    reset: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    // return 방식을 사용해서 state 값을 복사해서 새로운 state의 값으로 씌워버리기
    builder
      .addCase(fetchMakeIPFS.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchMakeIPFS.fulfilled, (state, action) => {
        state.fileUrl = action.payload.fileUrl;
        state.metadataUrl = action.payload.metadataUrl;
        state.metadata_ready = true;
      })
      .addCase(fetchMakeIPFS.rejected, (state) => {
        state.createStatus = false;
      })

      .addCase(fetchCreateFund.pending, (state) => {
        state = initialState;
      })
      .addCase(fetchCreateFund.fulfilled, (state, action) => {
        console.log("펀딩정보 : ", action.payload);
        console.log("업데이트 시킨 state : ", state);
        // }
      })
      .addCase(fetchCreateFund.rejected, (state) => {
        state = initialState;
      });
  },
});

export const { nftFundAction } = nftFundSlice.actions;

export default nftFundSlice;
