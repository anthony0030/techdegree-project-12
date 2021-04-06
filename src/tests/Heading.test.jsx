/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading title="test"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
