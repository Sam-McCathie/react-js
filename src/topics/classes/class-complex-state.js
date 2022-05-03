import React, {Component} from "react";

export default class ClassComplexState extends Component {
  // const [contact, setContact] = React.useState({
  //     firstName: "John",
  //     lastName: "Doe",
  //     phone: "+1 (719) 555-1212",
  //     email: "itsmyrealname@example.com",
  //     isFavorite: false
  // })

  state = {
    firstName: "Sam",
    lastName: "McC",
    phone: "021 123 456",
    email: "email@email.com",
    isCool: false,
  };

  coolToggle = () => {
    this.setState((prevState) => {
      return {
        // ...prevState, <- not required
        isCool: !prevState.isCool,
      };
    });
  };

  render() {
    let coolIndicator = this.state.isCool ? (
      <span>200%</span>
    ) : (
      <span>No way</span>
    );

    return (
      <article>
        <div>
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
          <p> {this.state.phone}</p>
          <p> {this.state.email}</p>
        </div>
        <span onClick={this.coolToggle}>Is cool? -</span> {coolIndicator}
      </article>
    );
  }
}
