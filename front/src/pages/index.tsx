import Link from "next/link";
import ConnectWallet from "../components/ConnectWallet";

const Home = () => {
  return (
    <>
      <ConnectWallet />
      <Link href="/signup">sign up</Link>
    </>
  );
};

export default Home;

