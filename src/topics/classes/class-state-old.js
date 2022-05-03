import React, {Component} from "react";

export default class ClassStateOld extends Component {
  // old way of updating state
  // constructor -> required class syntax
  constructor() {
    // super() -> connects this class component with react.Component
    super();
    this.state = {
      happy: "Yes",
    };
    // required for this to not be undefined when calling method
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    this.setState((prevState) => {
      return {
        happy: prevState.happy === "Yes" ? "No" : "Yes",
      };
    });
  }

  render() {
    return (
      <div>
        <h1>useState</h1>
        <button onClick={this.toggleMood}>Toggle</button>
        <p>Happy ? : {this.state.happy}</p>
      </div>
    );
  }
}
