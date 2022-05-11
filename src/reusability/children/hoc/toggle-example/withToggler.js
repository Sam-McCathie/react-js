import React, {useState} from "react";

// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it extra abilities.

const Toggler = (props) => {
  const {component: Component, defaultShowValue} = props;

  const [show, setShow] = useState(defaultShowValue);

  const toggle = () => {
    setShow(!show);
  };

  return <Component show={show} toggle={toggle} {...props} />;
};

export const withToggler = (component, optionsObject) => {
  return function (props) {
    return (
      <Toggler
        component={component}
        defaultShowValue={optionsObject.defaultShowValue}
        {...props}
      />
    );
  };
};
