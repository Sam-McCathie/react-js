import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li>
          <Link to="hooks">Hooks</Link>
        </li>
        <li>
          <Link to="conditional-rendering">Conditional Rendering</Link>
        </li>
        <li>
          <Link to="forms">Forms</Link>
        </li>
        <li>
          <Link to="api">Api</Link>
        </li>
        <li>
          <Link to="event-listeners">Event Listeners</Link>
        </li>
        <li>
          <Link to="classes">Classes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
