import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import { myTheme } from "./myTheme";
import reportWebVitals from "./reportWebVitals";

interface IGlobalStyle {}

const GlobalStyle = createGlobalStyle<IGlobalStyle>`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
color:green;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
