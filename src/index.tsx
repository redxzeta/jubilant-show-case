import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import { myTheme } from "./myTheme";
import reportWebVitals from "./reportWebVitals";
import Store from "./store/store";

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
color:${(props) => props.theme.colors.black};
font-family: ${(props) => props.theme.headerFont}
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
