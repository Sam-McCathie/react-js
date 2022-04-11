import React, {useState} from "react";

const Updating = () => {
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
    // current state value assigned to prevFormData
    setNames((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div>
      <h1>Updating State</h1>
      <div style={{display: "flex"}}>
        <button onClick={subtract}>-</button>
        {count}
        <button onClick={add}>+</button>
      </div>

      <hr />
      <h1>Updating a state object</h1>
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

export default Updating;
