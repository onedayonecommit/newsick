import { useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import axios from "axios";
import Image from "next/image";
// 컴포넌트
const UserBar = () => {
  const imgUrl = "";
  const userAddress = useSelector((state) => state.userInfo.address);
  console.log("유저 지갑주소", userAddress);

  const profileImageHandler = async (e) => {
    console.log("클릭이벤트", e);
    e.preventDefault();

    if (e.target.files) {
      const imgData = e.target.files[0];
      console.log(imgData);

      const formData = new FormData();
      formData.append("image", imgData);
      formData.append("address", userAddress);
      await axios({
        method: "post",
        url: "http://127.0.0.1:4000/change-info/profile/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  };

  return (
    <div className="userBarSection">
      <div className="infoSection">
        <div className="optionSection"></div>
        <div className="userInfoSection">
          <div className="userImage">
            <Image
              src="https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/976aa28a-93af-4b17-a268-7cd18a734a84.jpeg"
              alt="프로필 이미지"
              width={100}
              height={100}
            />
          </div>
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
