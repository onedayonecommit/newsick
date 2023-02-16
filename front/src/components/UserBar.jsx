import { useDispatch, useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import userImage from "../../public/image/userImageMain.png";
import { motion } from "framer-motion";
// 컴포넌트
const UserBar = ({ handleOpen }) => {
  const router = useRouter();
  function movePage(page) {
    page == "my_page" ? router.replace("/") : router.push(`/${page}`);
  }
  const imgUrl = "";
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
      //==========================프로필 이미지 변경===============================
      // await axios({
      //   method: "post",
      //   url: "http://127.0.0.1:4000/change-info/profile/image",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      //==========================프로필 이미지 변경===============================

      dispatch(fetchUserImage(formData));
    }
  };

  return (
    <div className="userBarSection">
      <div className="infoSection">
        <div className="optionSection">
          <motion.div
            className="changeMemberInfo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleOpen}
          >
            회원정보 변경
          </motion.div>
        </div>
        <div className="userInfoSection">
          <div className="creatorTicket" />
          <Image
            width={150}
            height={150}
            className="userImage"
            src="https://gyeongil-newsic-2team-bucket.s3.ap-northeast-3.amazonaws.com/default_profile_image.png"
            alt="프로필 이미지"
            style={{
              cursor: "pointer",
              boxSizing: "border-box",
              flexShrink: "0",
              width: "150px",
              height: "150px",
              display: "block",
              backgroundSize: "cover",
              overflow: "hidden",
              position: "relative",
              borderRadius: "150px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onClick={() => {
              movePage("my_page");
            }}
          />
          <input
            type="file"
            name="file"
            accept="image/*"
            style={{ opacity: 0, height: "100px" }}
            onChange={profileImageHandler}
          />
          <ConnectWallet />
        </div>
        <div className="stateInfoSection"></div>
        <div className="anotherInfoSection"></div>
      </div>
    </div>
  );
};
export default UserBar;
