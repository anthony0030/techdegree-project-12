/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { Icon } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon i="" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
