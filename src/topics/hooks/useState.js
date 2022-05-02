import React, {useState} from "react";
import {Link} from "react-router-dom";

const UseState = () => {
  // correctly updating state with an existing value
  const [count, setCount] = useState(0);

  const add = () => setCount((prevCount) => prevCount + 1);
  // this is better than count + 1

  const subtract = () => setCount((prevCount) => prevCount - 1);

  // --------------------------------------------

  // updating state object
  const [names, setNames] = useState({
    firstName: "",
    lastName: "",
  });

  // destructure state
  const {firstName, lastName} = names;

  // using the same function for both first & last name
  const handleNames = (event) => {
    const {name, value} = event.target;
    // instead of event.target.name & event.target.value,

    // current state value assigned to prevFormData
    setNames((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <Link to="/hooks">Back</Link> | <Link to="/">Back/ Home</Link>
      <h1>useState</h1>
      <p>View code for method..</p>
      <div style={{display: "flex"}}>
        <button onClick={subtract}>-</button>
        {count}
        <button onClick={add}>+</button>
      </div>
      <hr />
      <h1>Updating a state object</h1>
      <p>Type below...</p>
      <form>
        <input
          type="text"
          placeholder="first name"
          onChange={handleNames}
          name="firstName"
        />
        <input
          type="text"
          placeholder="last name"
          onChange={handleNames}
          name="lastName"
        />
      </form>
      <h3>
        Hello {firstName} {lastName}
      </h3>
    </div>
  );
};

export default UseState;
