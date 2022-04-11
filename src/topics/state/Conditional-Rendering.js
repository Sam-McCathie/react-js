import React, {useState} from "react";
import {Link} from "react-router-dom";

const ConditionalRendering = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    // if true => false && if false => true
    setToggle(!toggle);
  };

  return (
    <div>
      <Link to="/state">Back</Link> | <Link to="/">Home</Link>
      <h1>Conditional-Rendering</h1>
      <button onClick={handleToggle}>{toggle ? "Hide" : "Show"}</button>
      {toggle && <p>Using && ... or</p>}
      {toggle ? <p>Not null..</p> : null}
    </div>
  );
};

export default ConditionalRendering;
