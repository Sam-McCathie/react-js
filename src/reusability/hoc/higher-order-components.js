import React from "react";
import Links from "../../components/Links";

/** HigherOrderComponents
 * A function that takes a component as its first argument and returns a new component
 * that wraps the given component, providing extra capabilities to it. e.g. .map()
 */

const HigherOrderComponents = () => {
  const links = [
    {to: "basic", title: "Basic HOC example"},
    {to: "toggle-example", title: "Toggle HOC example"},
  ];

  return (
    <div>
      <h1>Higher Order Components</h1>
      <Links links={links} />
    </div>
  );
};

export default HigherOrderComponents;
