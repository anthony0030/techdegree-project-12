import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const text = "Copyright \u00A9 veaudry.pro";
  const url = "https://veaudry.pro";
  return (
    <footer className="py-1 bg-dark fixed-bottom">
      <a href={url}>
        <p className="m-0 text-center text-white">{text} {year}</p>
      </a>
    </footer>
  );
}

export default Footer;