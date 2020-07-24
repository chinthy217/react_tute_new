import React, { useState } from "react";
import Button from "../Button";

const Counter = (props) => {
  console.log(props);
  /*  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount(count + 1);
  }
*/
  /*  function onDecrement() {
    setCount(count - 1);
  } */
  return (
    <>
      <h1>{props.count}</h1>
      <Button>Decrement</Button>
      <Button onClick={props.onIncrement}>Increment</Button>
      <Button>Reset</Button>
    </>
  );
};

export default Counter;
