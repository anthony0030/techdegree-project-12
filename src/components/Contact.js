import React from "react";
// import PropTypes from "prop-types";

import MainNav from "./MainNav"
import Heading from "./Heading"
import ContactLine from "./ContactLine"
import Icon from "./Icon"
import Profile from "./Profile.jpg"
import Anthony from "./anthony.vcf"

function Contact(props) {
  return (
    <div>
      <MainNav root={props.match.params.root} />
      <Heading title="Anthony Veaudry's" subtitle="Contact info"/>
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
              <ContactLine icon="mobile" text="+30 6948688704" link="tel:+30 6948688704"/>

            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

// Contact.propTypes = {
  // data: PropTypes.array.isRequired
// };




export default Contact;