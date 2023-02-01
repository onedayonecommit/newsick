import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);

  useEffect(() => {
    (() => {
      if (!window.ethereum) return;

      setWeb3(new Web3(window.ethereum));
    })();
  }, []);

  return web3;
};
