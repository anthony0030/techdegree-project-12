/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { ScrollBar } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ScrollBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
