import React from "react";
import {Link} from "react-router-dom";
import Links from "../../components/Links";

const Hooks = () => {

  const links = [
    {to: "useReducer", title: "useReducer"},
    {to: "useRef", title: "useRef"},
    {to: "useState", title: "useState"},
  ];

  return (
    <div>
      <Link to="/">Back/ Home</Link>
      <h1>Hooks</h1>
      <Links links={links}/>
    </div>
  );
};

export default Hooks;
