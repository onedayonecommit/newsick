import { faMemory, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
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
  const [date, setDate] = useState();
  const [isSubmissionButton, setIsSubmissionButton] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const clickSubmission = () => {
    setIsSubmissionButton(!isSubmissionButton);
  };

  const useDropDown = () => {
    setDropDown(!dropDown);
  };
  // ipfs 등록 및 메타데이터 생성
  const metadataMaker = ()=>{
    
  }
  useEffect(()=>{
    alert("이미지 등록을 먼저 진행해 주세요.")
  },[])
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
              <div className="fundingTitle">펀딩제목</div>
              <input className="fundingTitleInput" />
            </div>
          </div>
          <div className="fundingPeriodSection">
            <div>
              <div className="fundingPeriod">펀딩 기간</div>
              <div className="fundingPeriodFrame">
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                ~
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="songProductionSection">
            <div>
              <div className="songProduction">음원 제작 기간</div>
              <div className="songProductionFrame">
                <div>펀딩 종료일로부터</div>
                ~
                <input type="date" onChange={(e) => setDate(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="nftPriceUnitSection">
            <div>
              <div className="nftPriceUnit">NFT 개당 가격</div>
              <input
                className="nftPriceUnitInput"
                type="text"
                placeholder="숫자만 입력"
              />
            </div>
          </div>
          <div className="minimumNumberSection">
            <div>
              <div className="minimumNumber">최소 판매개수</div>
              <div className="inputFrame">
                <input
                  className="minimumNumberInput"
                  type="text"
                  placeholder="숫자만 입력"
                />
              </div>
              <div className="minNum">개</div>
            </div>
          </div>
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
                />
              </div>
              <div className="submissionFrame">
                <motion.div
                  className="submissionButton"
                  whileTap={{ y: 8 }}
                  onClick={clickSubmission}
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
                  확정
                </motion.div>
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
              <div className="dropOption">가요</div>
              <div className="dropOption">팝</div>
              <div className="dropOption">트로트</div>
              <div className="dropOption">클래식</div>
            </motion.div>

            <div>
              <div className="genreText">장르 선택</div>
              <div className="genreDropDown" onClick={useDropDown}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="secondContentSection">
            <div>
              <div>가수 프로필</div>
              <label>가수명</label>
              <input type="text" placeholder="가수명" />
              <label>성별</label>
              <select>
                <option value={0}>남</option>
                <option value={1}>여</option>
              </select>
              <label>가수소개</label>
              <input type="text" placeholder="가수소개" />
              <textarea wrap="on" />
            </div>
            <div>
              <div>작사가 프로필</div>
              <label>작사가명</label>
              <input type="text" placeholder="작사가명" />
              <label>성별</label>
              <select>
                <option value={0}>남</option>
                <option value={1}>여</option>
              </select>
              <label>작사소개</label>
              <input type="text" placeholder="작사가 정보" />
              <textarea />
            </div>
            <div>
              <div>작곡가 프로필</div>
              <label>작곡가명</label>
              <input type="text" placeholder="작곡가명" />
              <label>성별</label>
              <select>
                <option value={0}>남</option>
                <option value={1}>여</option>
              </select>
              <label>작곡소개</label>
              <input type="text" placeholder="작곡가 정보" />
              <textarea wrap="on" />
            </div>
          </div>
          <div className="submissionButton" typeof="button">
            제출
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingCreateContainer;
