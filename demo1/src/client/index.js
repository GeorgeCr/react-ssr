import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <App data={window.__INITIAL__DATA} />
  </BrowserRouter>,
  document.getElementById("root")
);
