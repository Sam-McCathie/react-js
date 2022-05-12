import React from "react";
import Toggler from "./toggler";

const Menu = () => {
  return (
    <Toggler
      defaultState={true}
      render={({show, toggle}) => (
        <div>
          <button onClick={toggle}>{show ? "Hide" : "Show"} Menu </button>
          <nav style={{display: show ? "block" : "none"}}>
            <h6>Signed in as Coder123</h6>
            <ul>
              <li>Your Profile</li>
              <li>Your Repositories</li>
              <li>Your Stars</li>
            </ul>
          </nav>
        </div>
      )}
    />
  );
};

export default Menu;
