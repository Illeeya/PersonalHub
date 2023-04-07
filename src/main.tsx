import React from "react";
import ReactDOM from "react-dom/client";
import MainController from "./components/MainController";
import "./mainStyle.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainController />
  </React.StrictMode>
);
