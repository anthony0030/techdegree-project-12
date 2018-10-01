import React from "react";
// import PropTypes from "prop-types";

import Heading from "./Heading"
import ContactLine from "./ContactLine"
import Profile from "./Profile.jpg"


function Contact(props) {
  return (
    <div>
      <Heading title="Anthony Veaudry's" subtitle="Contact info"/>
      <div className="row">
        <div className="col-12 portfolio-item">
         <div className="card contactCard">
          <img className="card-img-top" src={Profile} alt="My face" className="ProfilePhoto"/>
          <div className="card-body">
            <ul className="list-group">

              <ContactLine icon="person" text="Anthony Veaudry" link="https://www.facebook.com/anthonyveaudry"/>
              <ContactLine icon="person" text="anthony0030" link="https://github.com/anthony0030"/>
              <ContactLine icon="location_on" text="Greece" link="https://wikipedia.org/wiki/Greece"/>
              <ContactLine icon="email" text="anthony@veaudry.pro" link="mailto:anthony@veaudry.pro"/>
              <ContactLine icon="phone" text="+30 6948688704" link="tel:+30 6948688704"/>

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