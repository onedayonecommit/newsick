import { useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
// 컴포넌트
const UserBar = () => {
  const router = useRouter();
  function movePage(page) {
    page == "my_page" ? router.replace("/") : router.push(`/${page}`);
  }
  const imgUrl = "";
  const userAddress = useSelector((state) => state.userInfo.address);
  console.log("유저~~~~~", userAddress);

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
        url: "http://192.168.0.176:8080/change-info/profile/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      ret;
    }
  };

  return (
    <div className="userBarSection">
      <div className="infoSection">
        <div className="optionSection"></div>
        <div className="userInfoSection">
          <div className="creatorTicket" />
          <Image
            className="userImage"
            src="https://newsic-userprofile-nft-metadata-bucket.s3.ap-northeast-2.amazonaws.com/976aa28a-93af-4b17-a268-7cd18a734a84.jpeg"
            alt="프로필 이미지"
            width={150}
            height={150}
            onClick={() => {
              movePage("my_page");
            }}
          />
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
