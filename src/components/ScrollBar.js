import React from "react";

function ScrollBar(props) {
  return(
    <div className="scrollProgressBar__container fixed-top">
      <div id="myHorizontalBar" className="scrollProgressBar__progress bg-secondary"></div>
    </div>
  );
}

export default ScrollBar;
