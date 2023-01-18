import { BaseStyles, ThemeProvider } from "@primer/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GenerateDataProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BaseStyles>
        <GenerateDataProvider>
          <App />
        </GenerateDataProvider>
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>
);
