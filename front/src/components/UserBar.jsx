import { useDispatch, useSelector } from "react-redux";
import { ConnectWallet } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { fetchUserImage } from "@/middleware/fetchUser";
import { motion } from "framer-motion";

// 컴포넌트
const UserBar = ({ handleOpen, handleClick }) => {
  const dispatch = useDispatch();
  const userImg = useSelector((state) => state.userInfo.userImage);
  console.log("유저 기본 이미지", userImg);
  const userAddress = useSelector((state) => state.userInfo.address);
  const isCreator = useSelector((state) => state.userInfo.isCreator);

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
        <div className="optionSection">
          <motion.div className="changeMemberInfo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleOpen}>
            회원정보 변경
          </motion.div>
        </div>
        {isCreator ? (
          <div className="userInfoSection">
            <div className="creatorTicket" />
            <Link href="/mypage">
              <Image src={`https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/${userImg}`} className="userImage" alt="프로필 이미지" width={100} height={100} />
            </Link>
            <ConnectWallet />
          </div>
        ) : (
          <div className="userInfoSection">
            <Link href="/mypage">
              <Image src={`https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/${userImg}`} className="userImage" alt="프로필 이미지" width={100} height={100} />
            </Link>
            {/* 이미지 프로필 동적으로 변경해두기! */}
            <input type="file" name="file" accept="image/*" style={{ opacity: 0, height: "100px" }} onChange={profileImageHandler} />
            <ConnectWallet />
          </div>
        )}

        <div className="stateInfoSection" onClick={handleClick}></div>
        <div className="anotherInfoSection"></div>
      </div>
    </div>
  );
};
export default UserBar;
