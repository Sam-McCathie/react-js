import React from "react";
import {Link} from "react-router-dom";

const Hooks = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to="/hooks/useReducer">useReducer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hooks;
