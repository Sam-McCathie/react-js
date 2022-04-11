import React, {useState} from "react";
import {Link} from "react-router-dom";

const Forms = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    about: "",
    friendly: true,
    employment: "",
  });
  const {first, last, about, friendly, employment} = formData;

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  console.log(formData);

  return (
    <div>
      <Link to="/">Back / Home</Link>
      <h1>Forms</h1>
      <form style={{display: "flex", flexDirection: "column", width: "300px"}}>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="Sammy"
          name="first"
          onChange={handleChange}
          value={first}
        />

        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Boy"
          name="last"
          onChange={handleChange}
          value={last}
        />

        <label>About: </label>
        <textarea
          placeholder="About me..."
          name="about"
          onChange={handleChange}
          value={about}
        />

        <input
          id="isFriendly"
          type="checkbox"
          name="friendly"
          onChange={handleChange}
          checked={friendly}
        />

        <label htmlFor="isFriendly">Is friendly?</label>

        <h2>Employment Status</h2>

        <label>Unemployed</label>
        <input
          name="employment"
          value="unemployed"
          type="radio"
          checked={employment === "unemployed"}
          onChange={handleChange}
        />
        <label>Part-time</label>
        <input
          name="employment"
          value="part-time"
          type="radio"
          checked={employment === "part-time"}
          onChange={handleChange}
        />
        <label>Full-time</label>
        <input
          name="employment"
          value="full-time"
          type="radio"
          checked={employment === "full-time"}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Forms;
