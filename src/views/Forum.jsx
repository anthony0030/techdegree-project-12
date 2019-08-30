import React from "react";
import PropTypes from "prop-types";


// Application Components
import Heading from "../components/Heading/Heading";

function Projects() {

  return(
    <React.Fragment>
      <Heading title="" subtitle="My awesome portfolio" />
      <div className="row">
      {/* <!--Begin Website Toolbox Forum Embed Code--> */}
      <div id="wtEmbedCode">
        <script type="text/javascript" id="embedded_forum" src="https://anthony0030.discussion.community/js/mb/embed.js">
        </script>
        <noscript>
          <a href="https://anthony0030.discussion.community/">
            The Community Forum
          </a>
        </noscript>
      </div>
{/* <!--End Website Toolbox Forum Embed Code--> */}

      </div>
    </React.Fragment>
  );
}

Projects.propTypes = {
  match: PropTypes.object.isRequired
};


export default Projects;
