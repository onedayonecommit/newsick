import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { MypageBackDrop } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserImage } from "@/middleware/fetchUser";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const dropIn = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};
//   <motion.label
//   className='lyricsSource' for="lyricsSource"
//   whileHover={{
//       scale:0.9
//   }}
//   >
//      + 가사 첨부하기
//  </motion.label>
//  <input type="file" className='lyricsSource' id='lyricsSource' style={{display:"none"}}/>

const ChangeMember = ({ handleClose, text }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userAddress = useSelector((state) => state.userInfo.address);
  const userImg = useSelector((state) => state.userInfo.userImage);
  // console.log("유저의 이미지이이이이ㅣㅇ이", userImg);
  const nickname = useSelector((state) => state.userInfo.userName);
  const [userImage, setUserImage] = useState();
  const [previewImage, setpreviewImage] = useState();
  const [changeImg, setChangeImg] = useState(false);

  /**완료 버튼 눌렀을 때 */
  const changeProfile = () => {
    const formData = new FormData();
    formData.append("image", userImage);
    formData.append("address", userAddress);

    dispatch(fetchUserImage(formData));
    setUserImage(userImg);
  };

  /**프로필 이미지 미리보기 */
  const profileImageHandler = async (e) => {
    const reader = new FileReader();
    // console.log("클릭이벤트", e);
    e.preventDefault();

    if (e.target.files) {
      const imgData = e.target.files[0];
      // console.log(imgData);
      setUserImage(imgData);
      reader.readAsDataURL(imgData);
      setChangeImg(true);
    }
    reader.onload = () => {
      const previewImg = reader.result;
      if (previewImg) {
        setpreviewImage(previewImg);
      }
    };
  };

  return (
    <MypageBackDrop onClick={handleClose}>
      <motion.div onClick={(e) => e.stopPropagation()} className="changeUserInfoFrame" variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <div className="changeNavBar">
          <div
            className="successBtn"
            onClick={() => {
              changeProfile();
              handleClose();
            }}
          >
            완료
          </div>
          <div className="infoText">회원정보 변경</div>
        </div>
        <div className="middleLine" />
        <div className="changeMainSection">
          <label className="imgChange" for="imgChange">
            <FontAwesomeIcon icon={faCamera} className="faCamera" />
            <input type="file" name="file" accept="image/*" className="imgChange" id="imgChange" onChange={profileImageHandler} style={{ display: "none" }} />
          </label>
          {changeImg ? <Image className="userImg" src={previewImage} alt="userImg" width={300} height={300} /> : <Image className="userImg" src={`https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/${userImg}`} alt="userImg" width={300} height={300} />}

          <motion.span
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <input type="text" className="userNickName" placeholder={nickname} />
          </motion.span>
        </div>
      </motion.div>
    </MypageBackDrop>
  );
};

export default ChangeMember;
