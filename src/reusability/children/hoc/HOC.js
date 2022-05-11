import React from "react";

const HOC = (component) => {
  const C = component;
  return function (props) {
    // {...props} -> passes any props that are passed to component
    return <C hoc="From HOC" {...props} />;
  };
};

export default HOC;
