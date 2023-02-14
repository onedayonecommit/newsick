import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
// 컴포넌트
const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className="searchBarSection">
      <motion.div
        className="searchBarFrame"
        style={
          isFocused
            ? {
                boxShadow:
                  "0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",
                width: "585px",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }
            : {}
        }
      >
        <div className="searchBar">
          <motion.span animate={isFocused ? { scale: 1.2 } : { scale: 1 }}>
            <FontAwesomeIcon icon={faSearch} />
          </motion.span>
        </div>
        <input className="searchInput" type="text" placeholder="Search for Content..." onBlur={handleBlur} onFocus={handleFocus} />
      </motion.div>
    </div>
  );
};

export default SearchBar;
