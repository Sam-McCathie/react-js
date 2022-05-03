import React, {Component} from "react";

export default class ClassStateNew extends Component {
  // const [state, useState] = useState("Yes")
  // replace above with below

  // must be called "state" -> state will always be an object.
  state = {
    toggle: "Yes",
  };

  // declare method (no function keyword)
  // called with this.toggleYesNo -> must be an arrow method
  toggleYesNo = () => {
    // setState originates from Component class
    this.setState((prevState) => {
      return {
        //update the value of state.toggle
        toggle: prevState.toggle === "Yes" ? "No" : "Yes",
      };
    });
  };

  render() {
    return (
      <div>
        <h1>useState</h1>
        <button onClick={this.toggleYesNo}>Toggle</button>
        <p>Yes or No ? : {this.state.toggle}</p>
      </div>
    );
  }
}
