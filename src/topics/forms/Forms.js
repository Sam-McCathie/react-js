import React, {useState} from "react";
import {Link} from "react-router-dom";

const Forms = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    about: "",
    friendly: true,
    employment: "",
    faveColour: "",
  });
  const {first, last, about, friendly, employment, faveColour} = formData;

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // stops the page from refreshing on submit
    alert("data in console");
    console.log(formData);
  };

  return (
    <div>
      <Link to="/">Back / Home</Link>
      <h1>Forms</h1>
      <form
        onSubmit={handleSubmit}
        style={{display: "flex", flexDirection: "column", width: "300px"}}
      >
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
        <br />
        <h3>Fave Colour</h3>
        <select value={faveColour} onChange={handleChange} name="faveColour">
          <option value="">---Choose---</option>
          <option value="pink">Pink</option>
          <option value="not pink">Not pink?</option>
        </select>
        {/* defaults to a submit button as it is within a form element*/}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
