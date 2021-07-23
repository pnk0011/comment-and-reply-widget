import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CommentWidget from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CommentWidget />
  </StrictMode>,
  rootElement
);
