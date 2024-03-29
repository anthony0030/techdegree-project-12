import React, { useEffect } from "react";

function ScrollBar() {
  useEffect(() => {
    window.onscroll = function () {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myHorizontalBar").style.width = scrolled + "%";
    };
  }, []);

  return (
    <div className="scrollProgressBar__container fixed-top">
      <div
        id="myHorizontalBar"
        className="scrollProgressBar__progress bg-secondary"
      ></div>
    </div>
  );
}

export default ScrollBar;
