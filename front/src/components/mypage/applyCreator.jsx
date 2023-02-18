import useWeb3 from "@/hooks/useWeb3";
import { fetchApplyCreator } from "@/middleware/fetchUser";
import { useSelector, useDispatch } from "react-redux";
import { MyPageCreator } from "@/components";
import { motion } from "framer-motion";

const ApplyCreator = () => {
  const { web3, NEWSIC_FUND } = useWeb3();
  const dispatch = useDispatch();
  const isCreator = useSelector((state) => state.userInfo.isCreator);
  const user_wallet_address = useSelector((state) => state.userInfo.address);

  const creatorApply = async () => {
    const creatorPrice = await web3.utils.toWei("0.1", "ether");

    const creatorPay = await NEWSIC_FUND.methods.creatorJoinPay().send({ from: user_wallet_address, value: creatorPrice });
    console.log(creatorPay);
    dispatch(fetchApplyCreator({ user_wallet_address, is_creator: creatorPay.events.creatorApplicant.returnValues._status }));
  };
  return !isCreator ? (
    <>
      <div className="firstMyPage">
        <div className="myPageFirstContainerFrame">
          <div className="leftSection">
            <div className="textSection">
              <div>Anyone can be a creator!</div>
              <div>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
              <div>0.1 ETH</div>
            </div>

            <div
              className="buttonFrame"
              onClick={() => {
                console.log("hi");
                creatorApply();
              }}
            >
              Go to Creator Now
            </div>
          </div>
          <div className="rightSection">
            <motion.div className="lineUp" initial={{ opacity: 0, rotateY: -120, x: 200 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1 }} style={{ cursor: "pointer" }} whileHover={{ x: 70, y: 50 }} />
            <div className="lineDown" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <MyPageCreator />
  );
};

export default ApplyCreator;
