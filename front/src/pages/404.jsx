import Image from "next/image";

const Custom404 = () => {

  return (
    <div className="page404container">
      <div className="infoFrame">
        <div className="leftSideText">
          <div>We are Sorry</div>
          <div>We lost this Page</div>
        </div>
        <div className="rightSideButton">
          <div className="homeButton">Home</div>
          <div className="backButton">Back</div>
        </div>
      </div>
      <div className="lostPageImg"/>
    </div>
  )
};

export default Custom404;
