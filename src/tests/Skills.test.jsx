/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import { Skills } from "components";

it("renders without crashing", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "id-0-0");
  document.body.appendChild(div);
  ReactDOM.render(<Skills skills={["1", "2"]} projectIndex={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
