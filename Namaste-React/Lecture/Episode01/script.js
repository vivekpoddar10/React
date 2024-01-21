const container = document.querySelector("div");

//JS code to create heading, insert value in it, put the element in div
const heading = document.createElement("h1");
heading.innerHTML = "Hello wrold from JS";

heading.style.color = "#ffc600";

container.appendChild(heading);

// what is cdn?

//React code to create heading, insert value in it, put the element in div
const myHeading = React.createElement(
  "h1",
  { name: "reactHeading", id: "heading" },
  "Hello world from React"
);

console.log(myHeading);

const root = ReactDOM.createRoot(container);

root.render(myHeading);

/** create below html code using react
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <p></p>
 *      </div>
 *      <div id="child">
 *          <h1></h1>
 *          <p></p>
 *      </div>
 * <div>
 */

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Nested Element Using React"),
    React.createElement("p", {}, "This is paragraph"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested Element Using React"),
    React.createElement("p", {}, "This is paragraph"),
  ]),
]);

root.render(parentDiv);
