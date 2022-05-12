import React from "react";
import {withToggler} from "./withToggler";

const Menu = ({toggle, show}) => {
  //   const [show, setShow] = useState(false);

  //   const toggleShow = () => {
  //     setShow(!show);
  //   };

  return (
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
  );
};

export default withToggler(Menu, {defaultShowValue: true});
