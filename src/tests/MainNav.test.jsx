/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainNav } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MainNav />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
