import { useState } from "react";
import { PlayBar, SearchBar, SideBar, UserBar } from "../components";

const Layout = (props) => {
  const [isSoundClick, setIsSoundClick] = useState(false);
  const soundClick = () => {
    setIsSoundClick(!isSoundClick);
  };
  return (
    <div className="layoutFrame">
      {isSoundClick ? <VolumeBox /> : null}
      <div className="layoutBox">
        <SideBar />
        <PlayBar soundClick={soundClick} />
        <div className="contentSection">
          <SearchBar />
          <div className="content">{props.children}</div>
        </div>
        <UserBar />
      </div>
    </div>
  );
};

export default Layout;
