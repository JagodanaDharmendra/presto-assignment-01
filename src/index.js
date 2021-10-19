import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { Provider } from "react-redux";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://563cb1dc190b4e88925315400f0b1196@o1043260.ingest.sentry.io/6012771",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

Sentry.captureMessage("Application Started");

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
