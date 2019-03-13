/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import ContactLine from "./ContactLine";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ContactLine link="" icon="" text=""/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
