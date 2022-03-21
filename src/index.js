import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Appbar from "./Appbar";
import Image from "./Image";
import Viewdata from "./Viewdata";

ReactDOM.render(
  <>
    <Appbar/>
    <App/>
    
  </>,
  document.getElementById("root")
);

reportWebVitals();