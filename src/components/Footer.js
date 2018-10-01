import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="py-5 bg-dark fixed-bottom">
      <div className="container">
        <p className="m-0 text-center text-white">{props.text}</p>
      </div>
    </footer>
  );
}


Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;