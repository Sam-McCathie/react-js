import React from "react";

const HOC = (component) => {
  const Component = component;
  return function () {
    return <Component hoc="From HOC" />;
  };
};

export default HOC;
