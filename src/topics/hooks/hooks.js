import React from "react";
import {Link} from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <Link to="/">Back/ Home</Link>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to="/hooks/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/hooks/useState">useState</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
