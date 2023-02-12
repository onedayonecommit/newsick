import useWeb3 from "@/hooks/useWeb3";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyPageFirstContainer = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  const [linkedAccount, setLinkedAccount] = useState("");
  const isCreator = useSelector((state) => state.userInfo.isCreator);

  const creatorApply = async () => {
    if (!web3) return;
    const getAccount = await web3.eth.getAccounts();
    setLinkedAccount(getAccount[0]);
    const linkedAccount = getAccount[0];
    const creatorPrice = await web3.utils.toWei("0.12", "ether");

    const creatorPay = await NEWSIC_FUND.methods
      .creatorJoinPay()
      .send({ from: linkedAccount, value: creatorPrice });
    console.log(creatorPay);
  };
  return !isCreator ? (
    <>
      <div className="firstMyPage">
        <div className="myPageFirstContainerFrame">
          <div className="leftSection">
            <div className="textSection">
              <div>Anyone can be a creator!</div>
              <div>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </div>
              <div>0.1 ETH</div>
            </div>
            <button
              onClick={() => {
                console.log("hi");
                creatorApply();
              }}
            >
              <div className="buttonFrame">Go to Creator Now</div>
            </button>
          </div>
          <div className="rightSection">
            <div className="lineUp" />
            <div className="lineDown" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>너 이미 크리에이터임 </div>
    </>
  );
};

export default MyPageFirstContainer;
