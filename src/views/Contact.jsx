import React from "react";
// import PropTypes from "prop-types";

import { ContactLine, Heading, Icon } from "components";
import Profile from "../assets/images/Profile.jpg";
import Anthony from "../assets/anthony.vcf";

function Contact(/*props*/) {
  return (
    <React.Fragment>
      <Heading title="Contact me" subtitle="" />
      <div className="card mx-auto" style={{ maxWidth: "700px" }}>
        <a
          href={Anthony}
          download="Anthony Veaudry Contact-card.vcf"
          className="rounded bg-light align-self-end p-1 pt-0 mt-3 me-3"
        >
          <Icon i="download" />
        </a>
        <img
          className="rounded-circle w-100 ratio ratio-1x1 mx-auto my-3"
          style={{ maxWidth: 250 }}
          src={Profile}
          alt="My face"
        />
        <div className="card-body">
          <ul className="list-group">
            <ContactLine
              icon="facebook"
              text="Anthony Veaudry"
              link="https://www.facebook.com/anthonyveaudry"
            />
            <ContactLine
              icon="github"
              text="anthony0030"
              link="https://github.com/anthony0030"
            />
            <ContactLine
              icon="location"
              text="Greece"
              link="https://wikipedia.org/wiki/Greece"
            />
            <ContactLine
              icon="at"
              text="anthony@veaudry.pro"
              link="mailto:anthony@veaudry.pro"
            />
            <ContactLine
              icon="mobile"
              text="(+30) 694 868 8704"
              link="tel:+306948688704"
            />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

// Contact.propTypes = {
// data: PropTypes.array.isRequired
// };

export default Contact;
