import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from './global-styles';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  
  <BrowserRouter>
  <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
