import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from './global-styles';
import App from "./App";
import {app} from './lib/firebase.prod'
import { FirebaseContext } from "./context/firebase";


ReactDOM.render(
  <FirebaseContext.Provider value={{app}}>
  <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
