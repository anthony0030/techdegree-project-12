import React from "react";
import PropTypes from "prop-types";

import Heading from "./Heading"
import Project from "./Project"
import Profile from "./Profile.jpg"


function Contact(props) {
  return (
    <div>
      <Heading title="Anthony Veaudry's" subtitle="Contact info"/>
      <div className="row">
        <div className="col-12 portfolio-item">
         <div className="card">
          <img className="card-img-top" src={Profile} alt="Card image cap" className="ProfilePhoto"/>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Anthony Veaudry</li>
              <li className="list-group-item">anthony@veaudry.pro</li>
              <li className="list-group-item">+30 6948688704</li>
              <li className="list-group-item">Greece</li>
              <li className="list-group-item">anthony0030</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  // data: PropTypes.array.isRequired
};




export default Contact;