import { useDispatch, useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchUserImage } from "@/middleware/fetchUser";

// 컴포넌트
const UserBar = () => {
  const dispatch = useDispatch();
  const userImg = useSelector((state) => state.userInfo.userImage);
  console.log("유저 기본 이미지", userImg);
  const userAddress = useSelector((state) => state.userInfo.address);

  // useEffect(() => {}, [userImg]);

  const profileImageHandler = async (e) => {
    console.log("클릭이벤트", e);
    e.preventDefault();

    if (e.target.files) {
      const imgData = e.target.files[0];
      console.log(imgData);

      const formData = new FormData();
      formData.append("image", imgData);
      formData.append("address", userAddress);

      dispatch(fetchUserImage(formData));
    }
  };

  return (
    <div className="userBarSection">
      <div className="infoSection">
        <div className="optionSection"></div>
        <div className="userInfoSection">
          <Link href="/mypage">
            <Image src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${userImg}`} className="userImage" alt="프로필 이미지" width={100} height={100} />
          </Link>
          {/* 이미지 프로필 동적으로 변경해두기! */}
          <input type="file" name="file" accept="image/*" style={{ opacity: 0, height: "100px" }} onChange={profileImageHandler} />
          <ConnectWallet />
        </div>
        <div className="stateInfoSection"></div>
        <div className="anotherInfoSection"></div>
      </div>
    </div>
  );
};
export default UserBar;
