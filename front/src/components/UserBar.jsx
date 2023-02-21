import { useSelector } from "react-redux";
import { ConnectWallet } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

// 컴포넌트
const UserBar = ({ handleOpen, handleClick }) => {
  const router = useRouter();
  const userImg = useSelector((state) => state.userInfo.userImage);
  console.log("유저 기본 이미지", userImg);

  const isCreator = useSelector((state) => state.userInfo.isCreator);
  const createStatus = useSelector((state) => state.userInfo.createStatus);

  const linkMypage = () => {
    if (createStatus == false) {
      alert("회원만 접근 가능합니다!");
    } else {
      router.push("/mypage");
    }
  };

  return (
    <div className="userBarSection">
        <div className="optionSection">
          <motion.div className="changeMemberInfo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} onClick={handleOpen}>
            회원정보 변경
          </motion.div>
        </div>
        {isCreator ? (
          <div className="userInfoSection">
            {/* 크리에이터일 때 티켓 붙음! */}
            <div className="creatorTicket" />
            <Image src={`https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/${userImg}`} onClick={linkMypage} className="userImage" alt="프로필 이미지" width={100} height={100} />
            <ConnectWallet />
          </div>
        ) : (
          <div className="userInfoSection">
            <Image src={`https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/${userImg}`} onClick={linkMypage} className="userImage" alt="프로필 이미지" width={100} height={100} />
            <ConnectWallet />
          </div>
        )}

        <div className="stateInfoSection" onClick={handleClick}></div>
        <div className="anotherInfoSection"></div>
    </div>
  );
};
export default UserBar;
