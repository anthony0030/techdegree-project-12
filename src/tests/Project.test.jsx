/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Project } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "id-0-0");
  document.body.appendChild(div);
  ReactDOM.render(
    <BrowserRouter>
      <Project
        project={{
          title: "",
          photo: "",
          sourceUrl: "",
          url: "",
          skills: ["", ""],
          codacyBadgeLink: "",
          codacyBadgeIcon: "",
          overview: "",
        }}
        projectIndex={0}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
