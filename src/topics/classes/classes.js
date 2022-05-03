import React from "react";
import {Link} from "react-router-dom";

const Classes = () => {
  return (
    <div>
      <h1>Classes</h1>
      <ol>
        <li>
          <Link to="basics">Class basics refresher</Link>
        </li>
        <li>
          <Link to="functional-vs-class">Functional vs Class Component</Link>
        </li>
        <li>
          <Link to="state/new">Class State (modern)</Link>
        </li>
        <li>
          <Link to="state/old">Class State (old)</Link>
        </li>
      </ol>
    </div>
  );
};

export default Classes;
