import React from "react";
import { render } from "react-dom";
import "./css/normalize.css";
import "./css/style.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
