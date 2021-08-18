import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.js";
import './index.scss';
import './colors.scss';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
