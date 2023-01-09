import React from "react";
import ReactDOM from "react-dom/client";
import { Hello } from "./components/hello";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>
);
