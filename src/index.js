import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./store";

import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {};

// we use React alert Provider like redux provider.
// ek baar <App /> ko AlertProvider ke andar dal diya to phr we can use react alert anywhere in the project.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>
);
