import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BoolProvider } from "./context/value";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BoolProvider>
      <App />
    </BoolProvider>
  </React.StrictMode>
);
