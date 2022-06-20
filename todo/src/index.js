import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./component/app";
import store from "./component/store";



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,document.getElementById('root')
);