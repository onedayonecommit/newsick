import Head from "next/head";
import { useState } from "react";

import { SideBar, SearchBar, UserBar } from "./index";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
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
          <UserBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
