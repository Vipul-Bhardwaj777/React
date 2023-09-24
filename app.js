import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World form React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const jsxHeading = <h1>Hello World from JSX!</h1>;

root.render(jsxHeading);
