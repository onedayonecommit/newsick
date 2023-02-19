import { fetchMakeIPFS, fetchCreateFund } from "@/middleware/fetchFund";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWeb3 from "@/hooks/useWeb3";
import { useRouter } from "next/router";
import { nftFundAction } from "@/redux/nftFundSlice";
import { persistor } from "@/redux/store";

const FundingCreate = () => {
  const createStatus = useSelector((state) => state.fundInfo.createStatus);
  useEffect(() => {
    if (createStatus) {
      alert("펀딩 생성이 완료되었습니다.");
      router.push("/mypage");
      persistor.purge();
    }
  }, [createStatus]);
  const router = useRouter();
  // date 형식 맞춰
  const convertToTimestamp = (e) => {
    const _date = new Date(e);
    // console.log(_date.getTime());
    return _date.getTime();
  };
  const convertToISO8601 = (e) => {
    const _date = new Date(e);
    return _date.toISOString();
  };
  // 다루는 데이터 관리
  const [data, setData] = useState({
    nftName: "", // nft명
    nftDescription: "", // nft 소개
    id: 0, // 토큰아이디
    creator_id: "", // 크리에이터 지갑주소
    funding_title: "", // 펀딩제목
    category: "", // 장르
    funding_start_date: 0, // 펀딩시작기간
    funding_finish_date: 0, // 펀딩종료기간
    funding_production_date: 0, // 음원제작기간
    funding_price: 0, // NFT 개당 가격
    funding_min: 0, // NFT 최소 판매개수
    funding_holdershare: 0, // 홀더가 가져갈 퍼센트 몫
    discord_address: "", // 디스코드 주소
    funding_hard_cap: 0,
    funding_price: 0,
    holder_share: 0,
    lyrics_maker: {
      lyrics_name: "", // 작사가명
      lyrics_info: "", // 작사가 소개
      lyrics_sns_address: "", // 작사가 sns 주소
    },
    music_maker: {
      music_name: "", // 작곡가 명
      music_info: "", // 작곡가 소개
      music_sns_address: "", // 작곡가 sns 주소
    },
    singer: {
      singer_name: "", // 가수명
      singer_info: "", // 가수소개
      singer_sns_address: "", // 가수 sns 주소
    },
  });
  const [share, setShare] = useState(0.5);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const fundInfo = useSelector((state) => state.fundInfo);
  const { web3, NEWSIC_FUND } = useWeb3();
  const [isSubmissionButton, setIsSubmissionButton] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [imgFile, setImgFile] = useState();

  // IPFS 만들깅
  const clickSubmission = async () => {
    const _formData = new FormData();
    _formData.append("nft_image", imgFile);
    _formData.append("nft_name", data.nftName);
    _formData.append("producer", userInfo.address);
    _formData.append("description", data.nftDescription);
    try {
      dispatch(fetchMakeIPFS(_formData));
    } catch (error) {
      console.error(error);
    }
    setData({ ...data, creator_id: userInfo.address });
    setIsSubmissionButton(true);
  };

  // 이미지 세팅
  const handleFile = (event) => {
    const _img = event.target.files[0];
    setImgFile(_img);
    const _image = new Image();
    _image.src = URL.createObjectURL(_img);
    setImgURL(_image.src);
  };

  const makeFund = async () => {
    let _fundingStruct = [
      userInfo.address, // 크리에이터
      fundInfo.funding_metadata, // 메타데이터
      // convertToTimestamp(data.funding_start_date), // 시작일
      // convertToTimestamp(data.funding_finish_date), // 종료일
      // convertToTimestamp(data.funding_production_date), // 음원제작 기간
      Math.floor(new Date(data.funding_start_date).getTime() / 1000), // 시작일
      Math.floor(new Date(data.funding_finish_date).getTime() / 1000), // 종료일
      Math.floor(new Date(data.funding_production_date).getTime() / 1000), // 음원제작 기간
      0, // 개당 가격
      data.funding_min, // 최대
      data.funding_holdershare, // 음원수익(홀더)
    ];
    console.log(_fundingStruct, "스트럭트");
    const _sendData_toContract = await NEWSIC_FUND.methods._setUri(_fundingStruct, await web3.utils.toWei(String(data.funding_price), "ether")).send({ from: userInfo.address });

    console.log("펀딩생성 후 이벤트", _sendData_toContract.events.createFund.returnValues);
    setData({
      ...data,
      id: Number(_sendData_toContract.events.createFund.returnValues.tokenId),
    });
    console.log("서버 통신 시작");
    const _sendData_toBack = {
      fund: {
        id: Number(_sendData_toContract.events.createFund.returnValues.tokenId),
        creator_id: data.creator_id,
        category: data.category,
        funding_info: data.nftDescription,
        funding_start_date: convertToISO8601(data.funding_start_date),
        funding_finish_date: convertToISO8601(data.funding_finish_date),
        funding_production_date: convertToISO8601(data.funding_production_date),
        funding_nft_image: fundInfo.funding_nft_image,
        funding_metadata: fundInfo.funding_metadata,
        discord_address: data.discord_address,
        funding_title: data.funding_title,
        nft_name: data.nftName,
        funding_hard_cap: data.funding_hard_cap,
        funding_price: data.funding_price,
        holder_share: data.funding_holdershare,
      },
      lyrics_maker: {
        lyrics_name: data.lyrics_maker.lyrics_name,
        lyrics_sns_address: data.lyrics_maker.lyrics_sns_address,
        lyrics_info: data.lyrics_maker.lyrics_info,
      },
      music_maker: {
        music_name: data.music_maker.music_name,
        music_sns_address: data.music_maker.music_sns_address,
        music_info: data.music_maker.music_info,
      },
      singer: {
        singer_name: data.singer.singer_name,
        singer_sns_address: data.singer.singer_sns_address,
        singer_info: data.singer.singer_info,
      },
    };
    console.log(_sendData_toBack);
    console.log("서버 통신 시작2");
    dispatch(fetchCreateFund(_sendData_toBack));
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
          <div className="fundingTitleSection">
            <div>
              <div className="fundingTitle">NFT NAME</div>
              <input
                className="fundingTitleInput"
                onChange={(e) => {
                  setData({
                    ...data,
                    nftName: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="fundingTitleSection">
            <div>
              <div className="fundingTitle">NFT 설명</div>
              <input
                className="fundingTitleInput"
                onChange={(e) => {
                  setData({
                    ...data,
                    nftDescription: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="representativeImageSection">
            <div className="leftSection">
              <div>
                <div>음악 대표 이미지</div>
                <div>권장 크기 : 1000 x 1000 (1:1 비율)대표이미지 기준 1000x1000 이상 이미지를 등록하시면, 이미지 확대 기능이 제공됩니다.</div>
              </div>
            </div>
            <div className="rightSection">
              {imgURL ? (
                <div className="imgInputFrame">
                  <img src={imgURL} alt="preview-img" />
                </div>
              ) : (
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
                    accept="image/*"
                    onChange={(e) => {
                      handleFile(e);
                    }}
                  />
                </div>
              )}
              <div className="submissionFrame">
                <motion.div
                  className="submissionButton"
                  whileTap={{ y: 8 }}
                  onClick={() => {
                    clickSubmission();
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
                  {isSubmissionButton ? "이미지 변경 불가" : "확정(IPFS 만들기)"}
                </motion.div>
                <div className="text">"IPFS 등록 후 Metadata가 생성됩니다." "생성 후 NFT NAME, NFT 설명, 등록 이미지는 변경이 불가합니다."</div>
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
                    funding_title: e.target.value,
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
                    // const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_start_date: e.target.value,
                    });
                  }}
                />
                ~
                <input
                  type="date"
                  onChange={(e) => {
                    // const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_finish_date: e.target.value,
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
                    // const __date = convertToISO8601(e.target.value);
                    setData({
                      ...data,
                      funding_production_date: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="nftPriceUnitSection">
            <div className="nftPriceUnit">NFT 개당 가격</div>
            <div className="rightSide">
              <div className="nowText">실시간</div>
              <input
                className="nftPriceUnitInput"
                type="number"
                placeholder="숫자만 입력"
                onChange={(e) => {
                  setData({
                    ...data,
                    funding_price: Number(e.target.value),
                  });
                }}
              />
              <div className="nowText">ETH</div>
            </div>
          </div>
          <div className="minimumNumberSection">
            <div>
              <div className="minimumNumber">최대 판매개수</div>
              <div className="inputFrame">
                <input
                  className="minimumNumberInput"
                  type="number"
                  placeholder="숫자만 입력"
                  onChange={(e) => {
                    setData({
                      ...data,
                      funding_hard_cap: Number(e.target.value),
                    });
                  }}
                />
              </div>
              <div className="minNum">개</div>
            </div>
          </div>
          <div className="minimumNumberSection">
            <div>
              <div className="minimumNumber">Discord Address</div>
              <div className="inputFrame">
                <input
                  className="minimumNumberInput"
                  type="text"
                  placeholder="디스코드 주소 입력"
                  onChange={(e) => {
                    setData({
                      ...data,
                      discord_address: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="shareSection">
            <div className="shareFrame">
              <div className="info">* 음원 수익 배분 100% 기준 /</div>
              <div className="contents">
                <div>제작자 : 보유자 =</div>
                <div>{Number(100 - share)}%</div>
                <div>:</div>
                <input
                  type="number"
                  onChange={(e) => {
                    setShare(e.target.value);
                    setData({
                      ...data,
                      funding_holdershare: Number(e.target.value),
                    });
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="genreSection">
            <div className="genreText">장르 선택</div>
            <select
              className="dropDownBox"
              onChange={(e) => {
                setData({
                  ...data,
                  category: e.target.value,
                });
              }}
            >
              <option value={0}>선택</option>
              <option value={"가요"}>가요</option>
              <option value={"팝"}>팝</option>
              <option value={"트로트"}>트로트</option>
              <option value={"클래식"}>클래식</option>
            </select>
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
              <div className="name">
                <div className=".singerName">SNS(프로필) 주소</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      singer: {
                        ...data.singer,
                        singer_sns_address: e.target.value,
                      },
                    });
                  }}
                />
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
              <div className="name">
                <div className=".singerName">SNS(프로필) 주소</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      music_maker: {
                        ...data.music_maker,
                        music_sns_address: e.target.value,
                      },
                    });
                  }}
                />
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
              <div className="name">
                <div className=".singerName">SNS(프로필) 주소</div>
                <input
                  className="nameInput"
                  onChange={(e) => {
                    setData({
                      ...data,
                      lyrics_maker: {
                        ...data.lyrics_maker,
                        lyrics_sns_address: e.target.value,
                      },
                    });
                  }}
                />
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

export default FundingCreate;
