import React from "react";

const Hello = () => {
  //return React.createElement("div", null, "Hello JSX");
  //for print in h1 tag
  //return React.createElement("div", null, "<h1> Hello JSX </h1>");
  // check output, now ?
  return React.createElement(
    "div",
    { id: "divTag", className: "my_class" }, //inspect it and see magic
    React.createElement("h1", null, "Hello JSX")
  );
};

export default Hello;
