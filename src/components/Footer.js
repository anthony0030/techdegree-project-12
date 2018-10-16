import React from "react";
import PropTypes from "prop-types";

function Footer() {
  const year = new Date().getFullYear();
  const text = "Copyright \u00A9 veaudry.pro";
  const url = "https://veaudry.pro";
  return (
    <footer className="py-1 bg-dark fixed-bottom">
      <div className="container">
        <a href={url}>
          <p className="m-0 text-center text-white">{text} {year}</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;