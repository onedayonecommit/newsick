import ConnectWallet from "./ConnectWallet";

// 컴포넌트
const UserBar = () => {
  return (
    <div className="userBarSection">
      <div className="infoSection">
        <div className="optionSection"></div>
        <div className="userInfoSection">
          <div className="userImage"></div>
          <ConnectWallet />
        </div>
        <div className="stateInfoSection"></div>
        <div className="anotherInfoSection"></div>
      </div>
    </div>
  );
};
export default UserBar;
