import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
const theme = createTheme();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
