import { fetchMakeIPFS } from "@/middleware/fetchFund";
import { faMemory, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWeb3 from "@/hooks/useWeb3";

const ProfileItem = [
  {
    profileName: "가수",
  },
  {
    profileName: "작곡가",
  },
  {
    profileName: "작사가",
  },
];
const slideVerticalAnimation = {
  open: {
    rotateY: 0,
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: "spring",
    },
    display: "flex",
  },
  close: {
    rotateY: 15,
    rotateX: 20,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
const FundingCreateContainer = () => {
  const convertToISO8601 = (e) => {
    const _date = new Date(e);
    return setDate(_date.toISOString());
  };
  const dated = new Date();
  const isodate = dated.toISOString();
  const [date, setDate] = useState();
  const [data, setData] = useState({
    creator_id: "", // 크리에이터 지갑주소
    funding_info: "", // 펀딩제목
    category: "", // 장르
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
  });
  const [share, setShare] = useState(0.5);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const fundInfo = useSelector((state) => state.fundInfo);
  const { web3, NEWSIC_FUND } = useWeb3();
  const [isSubmissionButton, setIsSubmissionButton] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const clickSubmission = () => {
    setIsSubmissionButton(!isSubmissionButton);
  };
  const useDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleFile = async (event) => {
    try {
      const _file = event.target.files[0];
      dispatch(fetchMakeIPFS({ fund_nft_image: _file }));
    } catch (error) {
      console.error(error);
    }
  };

  const makeFund = async (event) => {
    let _fundingStruct = {
      creator: userInfo.address, // 크리에이터
      uri: fundInfo.metadataUrl, // 메타데이터
      startdate: data.funding_start_date, // 시작일
      finishdate: data.funding_finish_date, // 종료일
      makedate: data.funding_production_date, // 음원제작 기간
      price: data.funding_price, // 개당 가격
      min: data.funding_min, // 최소
      max: data.funding_min, //  최대
    };
    let _holdershare = data.funding_holdershare;
    console.log(_fundingStruct);
    console.log(_holdershare);
    // console.log(fundInfo);
    const _sendData_toContract = await NEWSIC_FUND.methods
      .setTokenUri(_fundingStruct, _holdershare)
      .send({ from: userInfo.address });
    console.log(_sendData_toContract);
  };

  return (
    <div className="fundingCreateContainerFrame">
      <div className="infoBox">
        <div className="infoFrame">
          <FontAwesomeIcon icon={faFileLines} />
          <div>Funding Create Page</div>
        </div>
      </div>
      <div className="mainContentSection">
        <div className="contentSection">
          <div className="representativeImageSection">
            <div className="leftSection">
              <div>
                <div>음악 대표 이미지</div>
                <div>
                  권장 크기 : 1000 x 1000 (윈도대상 750 x 1000)대표이미지 기준
                  1000x1000 이상 이미지를 등록하시면, 이미지 확대 기능이
                  제공됩니다.
                </div>
              </div>
            </div>
            <div className="rightSection">
              <div className="imgInputFrame">
                <motion.label
                  className="imgInput"
                  for="inputFile"
                  whileHover={{
                    scale: 1.2,
                  }}
                >
                  이미지 등록
                </motion.label>
                <input
                  type="file"
                  className="imgInput"
                  id="inputFile"
                  style={{ display: "none" }}
                  onChange={handleFile}
                />
              </div>
              <div className="submissionFrame">
                <motion.div
                  className="submissionButton"
                  whileTap={{ y: 8 }}
                  onClick={() => {
                    clickSubmission();
                    console.log(data);
                  }}
                  style={
                    isSubmissionButton
                      ? {
                          color: "rgba(255, 255, 255, 1)",
                          boxShadow: "none",
                          backgroundColor: "rgba(0,0, 0, 1)",
                        }
                      : ""
                  }
                >
                  확정(IPFS 만들기)
                </motion.div>
              </div>
            </div>
          </div>
          <div className="fundingTitleSection">
            <div>
              <div className="fundingTitle">펀딩제목</div>
              <input
                className="fundingTitleInput"
                onChange={(e) => {
                  setData({
                    ...data,
                    funding_info: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="fundingPeriodSection">
            <div>
              <div className="fundingPeriod">펀딩 기간</div>
              <div className="fundingPeriodFrame">
                <input
                  type="date"
                  onChange={(e) => {
                    const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_start_date: __date,
                    });
                  }}
                />
                ~
                <input
                  type="date"
                  onChange={(e) => {
                    const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_finish_date: __date,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="songProductionSection">
            <div>
              <div className="songProduction">음원 제작 기간</div>
              <div className="songProductionFrame">
                <div>펀딩 종료일로부터</div>
                ~
                <input
                  type="date"
                  onChange={(e) => {
                    const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_production_date: __date,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="nftPriceUnitSection">
            <div>
              <div className="nftPriceUnit">NFT 개당 가격</div>
              <div>실시간</div>
              <input
                className="nftPriceUnitInput"
                type="number"
                placeholder="숫자만 입력"
                onChange={(e) => {
                  setData({
                    ...data,
                    funding_price: e.target.value,
                  });
                }}
              />
              <div>ETH</div>
            </div>
          </div>
          <div className="minimumNumberSection">
            <div>
              <div className="minimumNumber">최소 판매개수</div>
              <div className="inputFrame">
                <input
                  className="minimumNumberInput"
                  type="number"
                  placeholder="숫자만 입력"
                  onChange={(e) => {
                    setData({
                      ...data,
                      funding_min: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="minNum">개</div>
            </div>
          </div>
          <div className="shareSection">
            <div className="shareFrame">
              <div className="info">* 음원 수익 배분 100% 기준</div>
              <div className="content">
                <div>제작자 : 보유자 =</div>
                <input
                  onChange={(e) => {
                    setShare(e.target.value);
                    setData({
                      ...data,
                      funding_holdershare: e.target.value,
                    });
                  }}
                ></input>
                %<div>:</div>
                <div>{Number(100 - share)}%</div>
              </div>
            </div>
          </div>
          <div className="genreSection">
            <motion.div
              className="dropDownBox"
              variants={slideVerticalAnimation}
              initial={!dropDown ? "open" : "close"}
              animate={!dropDown ? "close" : "open"}
            >
              <div
                className="dropOption"
                onChange={(e) => {
                  setData({
                    ...data,
                    category: 1,
                  });
                }}
              >
                가요
              </div>
              <div
                className="dropOption"
                onChange={(e) => {
                  setData({
                    ...data,
                    category: 2,
                  });
                }}
              >
                팝
              </div>
              <div
                className="dropOption"
                onChange={(e) => {
                  setData({
                    ...data,
                    category: 3,
                  });
                }}
              >
                트로트
              </div>
              <div
                className="dropOption"
                onChange={(e) => {
                  setData({
                    ...data,
                    category: 4,
                  });
                }}
              >
                클래식
              </div>
            </motion.div>

            <div>
              <div className="genreText">장르 선택</div>
              <div className="genreDropDown" onClick={useDropDown}>
                <div className="line"></div>
                <div className="line"></div>
                <div
                  className="line"
                  onChange={(e) => {
                    setData({
                      ...data,
                      category: 4,
                    });
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="secondContentSection">
            <div className="ProfileSection">
              <div> 가수프로필</div>
              <div className="name">
                <div className=".singerName">가수명</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      singer: { ...data.singer, singer_name: e.target.value },
                    });
                  }}
                />
              </div>
              <div className="sex">
                <label>가수성별</label>
                <select
                  onChange={(e) => {
                    setData({
                      ...data,
                      singer: {
                        ...data.singer,
                        singer_sex: e.target.value,
                      },
                    });
                  }}
                >
                  <option value={0}>선택</option>
                  <option value={1}>남</option>
                  <option value={2}>여</option>
                </select>
              </div>
              <div className="info">
                <div className="infoText"> 가수소개</div>
                <input
                  onChange={(e) => {
                    setData({
                      ...data,
                      singer: { ...data.singer, singer_info: e.target.value },
                    });
                  }}
                ></input>
              </div>
            </div>
            <div className="ProfileSection">
              <div> 작곡가프로필</div>
              <div className="name">
                <div className=".singerName">작곡가명</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      music_maker: {
                        ...data.music_maker,
                        music_name: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="sex">
                <label>작곡가성별</label>
                <select
                  onChange={(e) => {
                    setData({
                      ...data,
                      music_maker: {
                        ...data.music_maker,
                        music_sex: e.target.value,
                      },
                    });
                  }}
                >
                  <option value={0}>선택</option>
                  <option value={1}>남</option>
                  <option value={2}>여</option>
                </select>
              </div>
              <div className="info">
                <div className="infoText"> 작곡가소개</div>
                <input
                  onChange={(e) => {
                    setData({
                      ...data,
                      music_maker: {
                        ...data.music_maker,
                        music_info: e.target.value,
                      },
                    });
                  }}
                ></input>
              </div>
            </div>
            <div className="ProfileSection">
              <div> 작사가프로필</div>
              <div className="name">
                <div className=".singerName">작사가명</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      lyrics_maker: {
                        ...data.lyrics_maker,
                        lyrics_name: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="sex">
                <label>작사가성별</label>
                <select
                  onChange={(e) => {
                    setData({
                      ...data,
                      lyrics_maker: {
                        ...data.lyrics_maker,
                        lyrics_sex: e.target.value,
                      },
                    });
                  }}
                >
                  <option value={0}>선택</option>
                  <option value={1}>남</option>
                  <option value={2}>여</option>
                </select>
              </div>
              <div className="info">
                <div className="infoText"> 작사가소개</div>
                <input
                  onChange={(e) => {
                    setData({
                      ...data,
                      lyrics_maker: {
                        ...data.lyrics_maker,
                        lyrics_info: e.target.value,
                      },
                    });
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div
            className="submissionButton"
            typeof="button"
            onClick={() => {
              makeFund();
            }}
          >
            제출
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingCreateContainer;
