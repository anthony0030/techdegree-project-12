/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import Project from "./Project";
import {BrowserRouter} from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "id-0-0")
  document.body.appendChild(div)
  ReactDOM.render(
    <BrowserRouter>
      <Project
        project={{
          preTitle: "",
          title: "",
          photo: "",
          sourceUrl: "",
          url: "",
          skills: ["",""],
          codacyBadgeLink: "",
          codacyBadgeIcon: "",
          description: "",
        }}
        projectIndex={0}
        />
      </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
