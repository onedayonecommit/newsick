// whileHover 오류 해결방법??

import React, { useState, useEffect } from "react";

const useHover = () => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    const button = document.querySelector("#button");
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button id="button" style={{ backgroundColor: hover ? "red" : "blue" }}>
      Hover Me
    </button>
  );
};

export default useHover;
