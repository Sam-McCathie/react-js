import React, {useReducer} from "react";
import {Link} from "react-router-dom";

// 1. Call function "Action creators"
// 2. Created Action - "Actions" consist of an action "Type" and "Payload" -> Actions impact state
// 3. Dispatch the action via the dispatcher
// 4. Dispatched action is received by the "Reducer"
// 5. Reducers reads and enterprets the action type and paylod
// 6. Reducer updates the state accordingly
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
};

const UseReducer = () => {
  // Banking example

  const deposit = (amount) => {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };

  const withdraw = (amount) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };

  const [amount, dispatch] = useReducer(reducer, 500);
  // 500 is the initial state

  return (
    <div>
      <Link to="/hooks">Back</Link> | <Link to="/">Home</Link>
      <h1>useReducer</h1>
      <h3>Banking example</h3>
      <p>Deposit and withdraw money (values set to 10 by default).</p>
      <button onClick={() => deposit(10)}>Deposit</button>
      <button onClick={() => withdraw(10)}>Withdraw</button>
      <p>{amount}</p>
    </div>
  );
};

export default UseReducer;
