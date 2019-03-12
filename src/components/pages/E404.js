import React from "react";
import IMG404 from "../404.jpg";

function E404() {
  return (
    <React.Fragment>
      <h1>404 someone took this page</h1>
      <style>
        {`
          body{
            background-image: url(${IMG404});
            background-position: center center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-color: #fff;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default E404;
