import React from "react";
// import PropTypes from "prop-types";

import Heading from "../components/Heading/Heading";
import ContactLine from "../components/ContactLine/ContactLine";
import Icon from "../components/Icon/Icon";
import Profile from "../assets/images/Profile.jpg";
import Anthony from "../assets/anthony.vcf";

function Contact(props) {
  return(
    <React.Fragment>
      <Heading title="" subtitle="Contact me" />
      <div className="row">
        <div className="col-12 portfolio-item">
          <div className="card contactCard">
            <a href={Anthony} download="Anthony Veaudry Contact-card.vcf" className="contact-download-button">
              <Icon i="download"/>
            </a>
            <img className="ProfilePhoto rounded-circle" src={Profile} alt="My face"/>
            <div className="card-body">
              <ul className="list-group">
                <ContactLine icon="facebook" text="Anthony Veaudry" link="https://www.facebook.com/anthonyveaudry"/>
                <ContactLine icon="github" text="anthony0030" link="https://github.com/anthony0030"/>
                <ContactLine icon="location" text="Greece" link="https://wikipedia.org/wiki/Greece"/>
                <ContactLine icon="at" text="anthony@veaudry.pro" link="mailto:anthony@veaudry.pro"/>
                <ContactLine icon="mobile" text="(+30) 694 868 8704" link="tel:+306948688704"/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

// Contact.propTypes = {
  // data: PropTypes.array.isRequired
// };




export default Contact;
