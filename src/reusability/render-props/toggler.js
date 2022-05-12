import React, {useState} from "react";

const Toggler = (props) => {
  const [show, setShow] = useState(props.defaultState);

  const toggle = () => {
    setShow(!show);
  };

  const args = {
    show: show,
    toggle: toggle,
  };

  return <div>{props.render(args)}</div>;
};

// sets the default value of the prop "defaultState"
Toggler.defaultProps = {
  defaultState: false,
};

export default Toggler;
