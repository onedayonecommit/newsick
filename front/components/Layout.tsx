import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Head>
      <title>Newsic | 음원 NFT</title>
      {props.children}
    </Head>
  );
};

export default Layout;
