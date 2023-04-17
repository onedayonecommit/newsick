// 검색 결과 페이지
// npm install react-intersection-observer --save
import { useInView } from "react-intersection-observer";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchSearch } from "@/middleware/fetchSearch";
import { useState } from "react";

const itemData = [
  {
    itemName: "곡",
    itemMany: 18,
  },
  {
    itemName: "NFT",
    itemMany: 3,
  },
  {
    itemName: "펀딩",
    itemMany: 13,
  },
];

const SearchTotal = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const searchResult = useSelector((state) => state.searchInfo.searchResult); // 펀딩,펀딩뮤직,노말뮤직,nft
  const router = useRouter();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
    console.log("use effect hook, inView =", inView);
  });
  useEffect(() => {
    const word = router.query.Word;
    console.log(word, "쿼리 워드");
    dispatch(fetchSearch(word));
  }, [router.query.Word]);

  const pageResult = (e) => {
    const res = searchResult[e].map((e) => {
      return <div className="infoSection">{e?.funding_title || e?.music_name}</div>;
    });
    console.log(res, "rrrsss");
    console.log(searchResult);
    return res;
  };
  // const pages = () => {
  //   switch (page) {
  //     case 0:
  //       return pageResult(0);

  //     default:
  //       return <div>hihi</div>;
  //       break;
  //   }
  // };
  useEffect(() => {
    console.log(searchResult, "반환받은 서치리절트");
  }, [searchResult]);
  return (
    <motion.div className="searchTotalFrame">
      <motion.div className="searchInfoTextFrame" animate={animation}>
        <div>{router.query.Word}</div>
        <div>에 대한 검색 결과 입니다.</div>
      </motion.div>
      <div className="justLine" />
      <div className="switchListBox">
        <motion.div
          className="optionFunding"
          animate={animation}
          onClick={() => {
            setPage(0);
          }}
        >
          펀딩 리스트
        </motion.div>
        <motion.div
          className="optionNftMusic"
          animate={animation}
          onClick={() => {
            setPage(1);
          }}
        >
          음악
        </motion.div>
        <motion.div
          className="optionMusic"
          animate={animation}
          onClick={() => {
            setPage(2);
          }}
        >
          음악(NFT)
        </motion.div>
        <motion.div
          className="optionNft"
          animate={animation}
          onClick={() => {
            setPage(3);
          }}
        >
          NFT
        </motion.div>
      </div>
      <div className="infoScrollBox" ref={ref}>
        <motion.div className="artistSection" animate={animation}>
          <div className="navBar">
            <div className="leftSide">
              <div className="text">결과</div>
              {page == 0 ? <div className="howMany">{searchResult[0].length} 개</div> : page == 1 ? <div className="howMany">{searchResult[1].length} 개</div> : page == 2 ? <div className="howMany">{searchResult[0].length} 개</div> : page == 3 ? <div className="howMany">{searchResult[0].length} 개</div> : null}
            </div>
            {/* {pages().map((e) => {
              console.log(pages());
              return e;
            })} */}
          </div>
          {<div className="infoSection"></div>}
        </motion.div>
        {/* {itemData.map((item) => (
          <motion.div className="anotherInfoSection" animate={animation}>
            <div className="navBar">
              <div className="leftSide">
                <div className="text">{item.itemName}</div>
                <div className="howMany">( {item.itemMany} )</div>
              </div>
              <div className="showAll"> showAll</div>
            </div>
            <div className="infoSection"></div>
          </motion.div>
        ))} */}
      </div>
    </motion.div>
  );
};

export default SearchTotal;
