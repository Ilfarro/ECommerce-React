import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// CUSTOM
import { Provider } from "unistore/react";
import { store } from "./store";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );

render(AppRouter);

serviceWorker.unregister();
