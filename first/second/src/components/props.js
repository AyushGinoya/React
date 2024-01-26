import React from "react";

const Name = (props) => {
  return (
    <div>
        {/* in class only change is use this key word e.g this.props.name */}
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
};

export default Name;
