<img width="800" alt="뉴직_메인" src="https://user-images.githubusercontent.com/107898608/228953832-8b8da271-68dc-4165-b12d-30d405f4315f.png">

## 📌 프로젝트 소개

<aside>
🎵 ERC1155 기반 음원NFT 펀딩 중개 및 음원 스트리밍 플랫폼

</aside>

- 메타마스크 연동 후 크리에이터 유저와 일반 유저로 가입
- 크리에이터 유저는 펀딩 생성 가능
- 일반 음원, NFT 음원 스트리밍 가능
- 유저는 펀딩에 자유롭게 참여
- NFT 마켓에서 NFT 거래 가능, 호가창으로 확인할 수 있음

<br/>

## 📍개발 환경

|                         | 사용 기술 및 라이브러리                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 클라이언트              | NextJs, Redux(redux-toolkit), redux-persist, redux-logger, SCSS, framer-motion, fortawesome, react-h5-audio-player, axios |
| 서버                    | NestJs, TypeScript, Prisma, cache-manager                                                                                 |
| 컨트랙트                | Solidity, Web3Js                                                                                                          |
| 데이터베이스            | MySql                                                                                                                     |
| AWS                     | EC2, S3, ELB, Certificate Manager(SSL인증서), Route53                                                                     |
| 컨트랙트 배포 네트워크  | goerli                                                                                                                    |
| 컨트랙트 배포 및 테스트 | remix                                                                                                                     |
| API 문서                | Swagger                                                                                                                   |
| 테스트                  | Jest                                                                                                                      |

<br/>

## 🔗 Link

**Team Github** https://github.com/onedayonecommit/newsick

**Team Notion** [코드베르그](https://www.notion.so/49bda951a4034783952d14c5ed1636c9)

**기획서** [[1.2] 프로젝트 기획안](https://www.notion.so/1-2-a3a56e828cf6449a9a036cfef6bf5161)

**작업관리** [[버전 관리] 화면설계서, 프로젝트 기획안, 와이어프레임 파일](https://www.notion.so/50053e9352ba4f738e910c44ca2538c8)

<br/>

## 💁🏻‍♀️ 팀원 소개

| 이름         | 담당 파트            | 구현 내용                                                                        |
| ------------ | -------------------- | -------------------------------------------------------------------------------- |
| [팀장]윤하영 | 컨트랙트, 백엔드     | 펀드, 마켓 컨트랙트, 컨트랙트 통신                                               |
| 김경환       | 컨트랙트, 백엔드     | 펀드, 마켓 컨트랙트, 백엔드 세팅, 컨트랙트 통신, DB 설계, 관리자 페이지, AWS배포 |
| 이지니       | 프론트엔드           | 전체 문서관리, 프론트 세팅, 메타마스크 연동, 페이지 UI 구현, 컨트랙트 통신       |
| 임준우       | 퍼블리싱, 프론트엔드 | 와이어프레임, 전체 페이지 디자인 및 퍼블리싱                                     |

<br/>

## ✔️ 주요 기능

### 🗃 페이지 별 상세기능

| 페이지 | 상세                                                                        |
| ------ | --------------------------------------------------------------------------- |
| 펀딩   | 유저의 펀딩 참여(컨트랙트 통신)                                             |
| 마켓   | NFT 구매 및 판매(컨트랙트 통신)                                             |
| 뮤직   | 일반 음원, NFT 음원 차트                                                    |
| 회원   | 크리에이터 신청(컨트랙트 통신), 크리에이터 관리, 관심(펀딩&NFT), 소유한 NFT |
| 구독   | 구독권 신청(컨트랙트 통신)                                                  |
| 전체   | 뮤직 플레이어 팝업, 스트리밍                                                |
| 관리자 | 일반 음원 등록, 펀딩 음원 등록 수락 여부                                    |

- **메타마스크 연동 및 로그인, 회원가입**

  1. 메타마스크 연동 후 연결한 계정이 회원이면 자동 로그인

  <img width="600" alt="뉴직_메인" src="https://user-images.githubusercontent.com/107898608/228954305-e9257772-dab4-4ed5-9afc-9108ee5c4867.png">

  2. 아닌 경우 회원가입 창으로 이동

     <img width="600" alt="뉴직_회원가입" src="https://user-images.githubusercontent.com/107898608/228954336-fa08443d-6cbe-4ac8-a3f2-f6aa2552a892.png">

     - 일반 유저로 가입하면 펀딩 생성 불가능
     - 0.1ETH를 지불하고 크리에이터 유저로 가입하면 펀딩 생성 가능

- **회원 정보 변경 및 마이페이지**

  1. 프로필 이미지는 변경 후 S3에 저장

  <img width="600" alt="뉴직_회원정보 변경" src="https://user-images.githubusercontent.com/107898608/228954430-9cd7abc3-b7af-40ca-97fe-86b5c6109536.png">

  2. 일반 유저일 때는 마이페이지에서 크리에이터 신청 가능

  <img width="600" alt="뉴직_일반유저일때" src="https://user-images.githubusercontent.com/107898608/228954870-9dfd64cc-d273-4894-aee7-5a4ff5c95093.png">

  3. 크리에이터 유저로 전환 후 자신이 오픈한 펀딩 정보 확인 및 펀딩 등록 가능

     <img width="600" alt="뉴직_마이페이지1" src="https://user-images.githubusercontent.com/107898608/228954920-0c429912-ff45-4201-bf5f-964fb5bbfddd.png">

     - **펀딩 등록**

       1. 펀딩 정보 입력 후 제출하면 펀딩 생성

          펀딩 신청 통신 순서는 백엔드 → 컨트랙트 → 백엔드

          1. 백엔드 == 이미지랑 메타데이터에 첨부할 데이터
             여기서 응답값으로 이미지 Ipfs경로랑 메타데이터 ipfs 경로를 응답받으면
          2. 컨트랙트에 해당 메타데이터 이미지 경로랑 수익분배율 최대 발행갯수 개당 가격 펀딩 시작 기간 종료기간 제작기간 이렇게 컨트랙트 통신 후 블록생성
          3. 응답 값에서 토큰아이디 추출해서 나머지 펀딩 정보 백엔드로 통신

          <img width="600" alt="뉴직_펀딩 등록1" src="https://user-images.githubusercontent.com/107898608/228955003-8e3cd6bc-6606-40f0-87cd-6060aacf5abf.png">

          <img width="600" alt="뉴직_펀딩 등록2" src="https://user-images.githubusercontent.com/107898608/228955023-8ad9c2b5-963c-4659-a189-70bdd3f36d1b.png">

          <img width="600" alt="뉴직_펀딩 등록3" src="https://user-images.githubusercontent.com/107898608/228955046-3352cc2a-cd7f-4049-ba11-065d53512a3d.png">

- **FUNDING 페이지**

- **NFT MARKET 페이지**

  1. 모든 NFT 리스트 확인 가능
  2. NFT를 누르면 해당 NFT 상세페이지에서 판매 물량과 가격 호가창 확인 가능

  <img width="600" alt="뉴직_마켓 디테일" src="https://user-images.githubusercontent.com/107898608/228955531-2911a642-d7b6-490b-a61b-0e85c1e0f1ee.png">

- **MUSIC 페이지**

  1. 새로 등록한 음원(NFT 음원 & 일반 음원)
  2. 일반 음원 차트
  3. NFT 음원 차트
  4. 장르별 차트

  <img width="600" alt="뉴직_가요탑100" src="https://user-images.githubusercontent.com/107898608/228955571-5f277302-defd-45ea-8ab9-028edb9d90c8.png">

- **구독권 구매**

  1. 0.005ETH를 지불하고 스트리밍을 할 수 있는 구독권 구매

  <img width="600" alt="뉴직_구독권 결제" src="https://user-images.githubusercontent.com/107898608/228955621-7e62921d-ba8c-4827-8879-27a78187f4e3.png">

- **404 페이지**
  <img width="600" alt="뉴직_404페이지" src="https://user-images.githubusercontent.com/107898608/228955651-6cd0ff1c-60d5-49e8-8c7d-a689162d2f42.png">

<br/>

## 🔎 DB ERD

<img width="800" alt="NEWSIC_ERD" src="https://user-images.githubusercontent.com/107898608/228955816-88195132-aec3-4944-a84b-9e95e3d32b5a.png">

<br/>

## 📄 전체 페이지 구성

<img width="800" alt="뉴직_마인드맵" src="https://user-images.githubusercontent.com/107898608/228955718-4042feef-7e89-4cb0-86ee-d8fac600991b.png">

![뉴직_전체 페이지](https://user-images.githubusercontent.com/107898608/228955864-e2466e26-e958-4f90-bec6-f7b26c96c0b0.png)
