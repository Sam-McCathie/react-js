import React, {useState} from "react";
import {Link} from "react-router-dom";
import {WindowWidth} from "./WindowWidth";

const EventListeners = () => {
  const [widthVisible, setWidthVisible] = useState(true);

  return (
    <div>
      <Link to="/">Back/ Home</Link>
      <h1>Event Listeners</h1>
      <button onClick={() => setWidthVisible(!widthVisible)}>
        Toggle visibility
      </button>
      {widthVisible && <WindowWidth />}
    </div>
  );
};

export default EventListeners;
