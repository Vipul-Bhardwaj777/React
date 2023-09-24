import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


const heading = (
    <h1>Hello World from react element!</h1>
);
const JsxHeading = () => <h1>Hello World from JSX!</h1>;

const HeadingComponent = () => (
  <div className="container">
    <JsxHeading />
    <JsxHeading></JsxHeading>
    {JsxHeading()}
    {heading}
    <h1>Functional Component</h1>
  </div>
);

root.render(<HeadingComponent />);
