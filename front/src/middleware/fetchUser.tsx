import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchUser = createAsyncThunk("user/fetchUser", async (state)=>);

// // createAsyncThunk() -> 비동기 작업을 처리하는 action을 만들어줌
// const JoinFetch = createAsyncThunk("JoinSlice/JoinFetch", async (state) => {
//     console.log(state);
//     // axios를 통해 요청을 서버로 보내주고 서버에서 처리 후 다시 데이터를 클라이언트에 응답해준다!
//     const JoinResult = await axios({
//       method: "post",
//       url: "http://localhost:8000/user/join",
//       // 회원가입에서 입력한 값이 state에 담긴다
//       data: state,
//     })
//       // e에는 axios response 데이터가 담긴다
//       // response.data: {}, // 서버가 제공한 응답(데이터)
//       // response.status: 200, // `status`는 서버 응답의 HTTP 상태 코드
//       // response.statusText: 'OK',  // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지
//       // response.headers: {},  // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공
//       // response.config: {}, // `config`는 요청에 대해 `axios`에 설정된 구성(config)
//       // response.request: {}
//       // `request`는 응답을 생성한 요청
//       // 브라우저: XMLHttpRequest 인스턴스
//       // Node.js: ClientRequest 인스턴스(리디렉션)
//       .then((e) => {
//         console.log(e);
//         // e.data는 user_controller에서 보낸 res.send의 응답이 담긴다!
//         console.log(e.data);
//         // alert(e.data);
//         return e.data;
//       })
//       // 여기를 타면 axios 에러를 뱉어낸다
//       .catch((error) => {
//         console.log(error);
//       });
//     return JoinResult;
//   });

//   axios.post("url", {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// })
// .then(function (response) {
//     // response
// }).catch(function (error) {
//     // 오류발생시 실행
// })

// // async/await 를 쓰고 싶다면 async 함수/메소드를 만듭니다.
// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
