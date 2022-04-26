import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const text = "Copyright \u00A9 veaudry.pro";
  const url = "https://veaudry.pro";

  return (
    <footer className="py-2 bg-dark fixed-bottom text-center">
      <a href={url} className="text-white link-unstyled">
        {text} {year}
      </a>
    </footer>
  );
}

export default Footer;
