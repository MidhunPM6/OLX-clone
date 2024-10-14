import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextAuth } from "./Context/ContextAuth";

ReactDOM.render(
  <ContextAuth>
    <Router>
      <App />
    </Router>
  </ContextAuth>,

  document.getElementById("root")
);
