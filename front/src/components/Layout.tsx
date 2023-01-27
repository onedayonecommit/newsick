import Head from "next/head";

import { MenuBar, SearchBar, UserBar } from "./index";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Newsic | 음원 NFT</title>
      </Head>
      <div className="TopTestFrame">
        <div className="TestFrame">
          <MenuBar />
          <div className="Test2Frame">
            <SearchBar />
            <div className="childrenFrame">{props.children}</div>
          </div>
          <UserBar />
        </div>
      </div>
    </>
  );
};

export default Layout;
