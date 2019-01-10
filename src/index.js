import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider, withNamespaces } from "react-i18next";

import * as serviceWorker from "./serviceWorker";
import i18n from "./i18n";
import App from "./App";

import "./index.css";

const TranslatedApp = withNamespaces()(App);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <TranslatedApp />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
