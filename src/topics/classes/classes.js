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
      </ol>
    </div>
  );
};

export default Classes;
