import React from "react";
import Toggler from "./toggler";

const Favourite = () => {
  return (
    <Toggler
      render={({show, toggle}) => (
        <div>
          <h3>Click heart to favorite</h3>
          <h1>
            <span onClick={toggle}>{show ? "❤️" : "♡"}</span>
          </h1>
        </div>
      )}
    />
  );
};

export default Favourite;
