import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="page404container">
      <div className="infoFrame">
        <div className="leftSideText">
          <div>We are Sorry</div>
          <div>We lost this Page</div>
        </div>
        <div className="rightSideButton">
          <Link href={"/"}>
            <div className="homeButton">Home</div>
          </Link>

          {/* <div className="backButton">Back</div> */}
        </div>
      </div>
      <div className="lostPageImg" />
    </div>
  );
};

export default Custom404;
