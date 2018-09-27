import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
    </footer>
  );
}


Footer.propTypes = {
  // title: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
};

export default Footer;