import React from "react";
import { Heading } from "components";
import { Link } from "react-router-dom";

function Home() {
  const buttonClass = "btn btn-lg btn-primary m-5 p-5";

  return (
    <>
      <Heading title="Home" subtitle="" />
      <h3>Welcome to my online Portfolio!</h3>
      <p>
        My name is Anthony. I am a Web developer. I enjoy deploying computer
        networks. I also enjoy setting up PBX systems.
      </p>

      <div className="d-flex justify-content-center">
        <Link className={buttonClass} to="/fewd">
          FEWD
          <br />
          PORTFOLIO
        </Link>
        <Link className={buttonClass} to="/ux">
          UX
          <br />
          PORTFOLIO
        </Link>
      </div>
    </>
  );
}

export default Home;
