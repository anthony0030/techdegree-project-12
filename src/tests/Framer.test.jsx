/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Framer } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Framer
        title={""}
        preTitle={""}
        url={""}
        className={""}
        projectIndex={0}
        modalOpen={false}
        />
      </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
