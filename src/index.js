/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./stores/configStore";
/**
 * wrap root component by redux store provider
 */
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
const root = document.getElementById("root");
ReactDOM.render(app, root);
