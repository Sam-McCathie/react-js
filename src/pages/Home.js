import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to="state">State</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
