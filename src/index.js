import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyleSheetManager } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyles />
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "showmenu"}>
        <App />
      </StyleSheetManager>
    </React.StrictMode>
  </BrowserRouter>
);
