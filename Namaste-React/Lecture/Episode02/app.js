'use strict';

import React from "react";
import ReactDOM from "react-dom/client";

const container = document.querySelector("div");
const root = ReactDOM.createRoot(container);
const heading = React.createElement("h1", {}, "React heading");
root.render(heading);

const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is heading by React"),
    React.createElement("p", {}, "This is paragraph by React"),
  ])
);

root.render(parentDiv);