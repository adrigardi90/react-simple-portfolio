import React from "react";
import { render, hydrate } from "react-dom";

import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import { RouterComponent } from "./router";

const rootElement: any = document.getElementById("root");
rootElement.hasChildNodes()
  ? hydrate(<RouterComponent />, rootElement)
  : render(<RouterComponent />, rootElement);

// render(<RouterComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
