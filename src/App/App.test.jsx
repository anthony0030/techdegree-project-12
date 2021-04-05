/**
 * @jest-environment jsdom
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it('renders without crashing', () => {
  window.history.pushState({}, '', process.env.REACT_APP_BASE_NAME);
  const div = document.createElement('div');
  div.setAttribute("id", "id-0-0")
  document.body.appendChild(div)
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
