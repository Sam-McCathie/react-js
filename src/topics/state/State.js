import React from "react";
import {Link} from "react-router-dom";

const State = () => {
  return (
    <div>
      <Link to={"/"}>Back/ Home</Link>
      <h1>State</h1>
      <ul>
        <li>
          <Link to={"/state/updating"}>Updating</Link>
        </li>
        <li>
          <Link to={"/state/conditional-rendering"}>Conditional Rendering</Link>
        </li>
      </ul>
    </div>
  );
};

export default State;
