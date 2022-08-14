import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { appStore } from "store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
