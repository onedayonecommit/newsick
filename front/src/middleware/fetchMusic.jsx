import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 일반음원 목록 가져오기
export const fetchNormalMusicList = createAsyncThunk("music/fetchNormalMusicList", async () => {
  try {
    const NormalMusicList = await axios.get("https://www.poopoobin.com/music-main-list/normal/list/all");
    console.log("일반음원 목록", NormalMusicList.data);
    return NormalMusicList.data;
  } catch (err) {
    console.log("일반음원 목록 불러오기 에러");
  }
});

// 펀딩 음원 목록
export const fetchFundMusicList = createAsyncThunk("music/fetchFundMusicList", async () => {
  try {
    const fundMusicList = await axios.get("https://www.poopoobin.com/music-main-list/funding/list/all");
    console.log("펀딩 음원 목록", fundMusicList);
    return fundMusicList.data;
  } catch (err) {
    console.log("펀딩 음원 목록 불러오기 에러");
  }
});

// 신규 음원 목록
export const fetchNewMusicList = createAsyncThunk("music/fetchNewMusicList", async () => {
  try {
    const newMusicList = await axios.get("https://www.poopoobin.com/music-main-list/newMusic");
    console.log("신규 음원 목록", newMusicList);
    return newMusicList.data;
  } catch (err) {
    console.log("신규 음원 목록 불러오기 에러");
  }
});

// 장르 순위 불러오기
export const fetchGenreList = createAsyncThunk("music/fetchGenreList", async (genre) => {
  try {
    const genreList = await axios.get(`https://www.poopoobin.com/music-genre-list/?genre=${genre}`);
    console.log("장르장르", genreList.data);
    return genreList.data;
  } catch (err) {
    console.log("장르 리스트 에러");
  }
});

// 좋아요 누른 곡 목록 불러오기
// export const fetchLikeMusicList = createAsyncThunk("music/fetchLikeMusicList", async (user_wallet_address) => {
//   try {
//     const likeMusicList = await axios.get("https://www.poopoobin.com/playlist/", user_wallet_address);
//     console.log("좋아요 누른 곡 리스트", genreList.data);
//     return likeMusicList.data;
//   } catch (err) {
//     console.log("좋아요 누른 곡 리스트");
//   }
// });

/**뮤직 디테일 페이지 정보 */
export const fetchSongDetailInfo = createAsyncThunk("music/fetchSongDetailInfo", async (songId) => {
  try {
    const SongDetailInfo = await axios.get(`https://www.poopoobin.com/music-detail-info/${songId}`);

    console.log("뮤직 디테일 페이지", SongDetailInfo.data);
    return SongDetailInfo.data;
  } catch (err) {
    console.log("뮤직 디테일 에러");
  }
});

// 플레이리스트 불러오기
export const fetchPlayList = createAsyncThunk("music/fetchPlayList", async (user_wallet_address) => {
  try {
    const playList = await axios.post("https://www.poopoobin.com/playlist", user_wallet_address);
    console.log("받아온 플레이리스트", playList.data);
    return playList.data;
  } catch (error) {
    console.log("플레이리스트 에러");
  }
});

/**현재 내 플레이리스트에 추가하기 */
export const fetchAddSong = createAsyncThunk("music/fetchAddSong", async (addPlayList) => {
  try {
    console.log("에드 플레이리스트", addPlayList);
    const addSong = await axios.post("https://www.poopoobin.com/playlist/add", addPlayList);

    console.log("내 플레이리스트에 추가", addSong.data);
    return addSong.data;
  } catch (err) {
    console.log("내 플레이리스트에 추가 에러");
  }
});

// /**현재 내 플레이리스트에서 삭제하기 */
// export const fetchDeleteSong = createAsyncThunk("music/fetchDeleteSong", async (songId) => {
//   try {
//     const deleteSong = await axios.get(`https://www.poopoobin.com/music-detail-info/?songNum=${songId}`);

//     console.log("뮤직 디테일 페이지", deleteSong.data);
//     return deleteSong.data;
//   } catch (err) {
//     console.log("뮤직 디테일 에러");
//   }
// });
