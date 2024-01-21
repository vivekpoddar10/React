import React from "react";
import ReactDOM from "react-dom";

const container = document.querySelector("div");
const root = ReactDOM.createRoot(container);

const heading = React.createElement("h1", {}, "Hello, Lecture 3");
root.render(heading);

/**
 * ! JSX is not an HTML element
 * * It is similar to html syntax, but at the end it is an object
 * * Which will be compiled to React.createElement() by babel, which is called by parcel
 * * React.createElement() is an object which will be converted to HTML element by render method
 */
const jsxHeading = <h1>This is JSX heading</h1>;

root.render(jsxHeading);

/**
 * * React Component
 * ? Types of React Component: Class Based Component, Functional Based Component
 */

/**
 * TODO: Create Functional Based Component
 * ? Functional Based Component - A Javascript Function
 * @returns JSX
 */

const ComponentIntro = function () {
  return <h1>Element created using Functional Component</h1>;
};

/**
 * TODO: Create React Component, and Component Composition
 * ? component composition - calling one react component/ element inside other ccomponent/ element
 * @returns JSX
 */

const spanElem = <span>React</span>

const JsxDivComponent = () => (
  <div id="parent">
    <div id="child">
      <ComponentIntro />
      <h2 className="childClass">This is JSX heading by {spanElem}</h2>
      <p>This is JSX paragraph </p>
    </div>
  </div>
);

root.render(<JsxDivComponent />);
