import React, {Component} from "react";

// Functional component
// const FunctionalVsClass = (props) => {
//   return (
//     <div>
//       <h1>Functional Component</h1>
//       <p>{props.message}</p>
//     </div>
//   );
// };
// export default FunctionalVsClass;

// Class component
export default class FunctionalVsClass extends Component {
  // Required! -> render returns react elements that display on the screen
  // props are automatically added to the object that is created with this class

  // add logic here
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
