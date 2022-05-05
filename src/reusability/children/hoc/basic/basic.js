import React from "react";
import HOC from "./HOC";

const Basic = (props) => {
  return <h1>Hello - {props.hoc}</h1>;
};

export default HOC(Basic);
