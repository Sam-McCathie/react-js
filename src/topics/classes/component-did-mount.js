import React, {Component} from "react";

export default class ComponentDidMount extends Component {
  state = {
    character: {},
  };

  // runs after the very first render of component
  componentDidMount() {
    console.log("Component did mount");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) =>
        this.setState((prev) => {
          return {
            character: data,
          };
        })
      );
  }

  render() {
    console.log("Render");
    return <h1>Yello: {this.state.character.name}</h1>;
  }
}
