import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="py-1 bg-dark fixed-bottom">
      <div className="container">
        <a href={props.href}>
          <p className="m-0 text-center text-white">{props.text}</p>
        </a>
      </div>
    </footer>
  );
}


Footer.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default Footer;