import React, {Component} from "react";

export default class ComponentDidUpdate extends Component {
  state = {
    name: "",
    mobile: "",
    faveColour: "",
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  componentDidMount() {
    console.log("Mount");
    const retrievedObject = localStorage.getItem("local");
    this.setState({...JSON.parse(retrievedObject)});
  }

  // runs each time state or props change
  componentDidUpdate() {
    console.log("Update");
    localStorage.setItem("local", JSON.stringify({...this.state}));
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h3>componentDidUpdate()</h3>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Mobile"
            onChange={this.handleChange}
            name="mobile"
            value={this.state.mobile}
          />
          <input
            type="text"
            placeholder="Fave Colour"
            onChange={this.handleChange}
            name="faveColour"
            value={this.state.faveColour}
          />
        </form>
      </div>
    );
  }
}
