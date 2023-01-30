import ConnectWallet from "./ConnectWallet";

import { useState } from "react";
// 컴포넌트
const UserBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="infoSection">
      <div className="optionSection"></div>
      <div className="userInfoSection">
        <div className="userImage"></div>

        <ConnectWallet />
      </div>
      <div className="stateInfoSection"></div>
      <div className="anotherInfoSection"></div>
    </div>
  );
};

export default UserBar;
