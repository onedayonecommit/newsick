// 펀딩 상세 페이지
import React, { useState } from "react";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// 펀딩 상세페이지
const FundingDetailContainer = () => {
  return (
    <div className="detailContainerFrame">
      <Swiper
        slidesPerView={1}
        direction={"vertical"}
        spaceBetween={0}
        debugger={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <div className="detailInfoSection">
            <div className="topInfoSection">
              <div className="fundingTitle">FUNDING TITLE</div>
              <div className="fundingBillSection">
                <div>제작 기간</div>
                <div>개당 판매 단가</div>
                <div>펀딩 목표 금액 (소프트캡)</div>
                <div>판매기간(펀딩 진행 기간) 타이머</div>
              </div>
            </div>
            <div className="bottomInfoSection">
              <div>음원 설명</div>
              <div>장르</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="detailInfoSection">
            <div className="profileSection">가수 프로필</div>
            <div className="profileInfoSection"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="detailInfoSection">
            <div className="profileSection">작사가 프로필</div>
            <div className="profileInfoSection"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="detailInfoSection">
            <div className="profileSection">작곡가 프로필</div>
            <div className="profileInfoSection"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="detailLostInfoSection">
            <div className="previewSection">음원미리듣기</div>
            <div className="announceSection">공지사항</div>
            <div className="discordSection">디스코드 주소</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="detailContainerBack" />
    </div>
  );
};

export default FundingDetailContainer;
