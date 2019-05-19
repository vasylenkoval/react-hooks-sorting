import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/globalStyles";
import App from "./components/App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.querySelector("#root")
);
