import Head from "next/head";
import { SideBar, SearchBar, UserBar } from "./index";
import { useState } from "react";
import MyPageLayOut from "../pages/mypage";

type Props = {
  children: React.ReactNode;
};

type a = {
  handleClick: React.Prop;
};

const Layout = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (): any => {
    setIsOpen(true);
  };
  const handleClose = (): any => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Newsic | 음원 NFT</title>
      </Head>
      <div className="layoutFrame">
        <div className="layoutBox">
          <SideBar />
          <div className="contentSection">
            <SearchBar />
            <div className="content">{props.children}</div>
          </div>
          <UserBar handleClick={handleClick} />
        </div>
        <MyPageLayOut isOpen={isOpen} handleClose={handleClose} />
      </div>
    </>
  );
};

export default Layout;
