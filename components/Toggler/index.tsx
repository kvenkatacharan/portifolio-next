import React from "react";

import styles from "Toggler.module.css";
function Toggler({ darkMode, handleClick }) {
  return (
    <div className="text-2xl">
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </div>
  );
}

export default Toggler;
