import React from "react";
import ReactDOM from "react-dom/client";
import { API } from "./components/API";
import { Test } from "./components/Test";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Test></Test>
  </React.StrictMode>
);
