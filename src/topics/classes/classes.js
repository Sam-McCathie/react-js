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
        <li>
          <Link to="state/complex">Complex State</Link>
        </li>
        <li>Life Cycle methodss</li>
        <ul>
          <li>
            <Link to="/classes/component-did-mount">componentDidMount()</Link>
          </li>
          <li>
            <Link to="/classes/component-did-update">componentDidUpdate()</Link>
          </li>
          <li>
            <Link to="/classes/component-did-unmount">
              componentDidUnmount()
            </Link>
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default Classes;
