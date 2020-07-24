import React from "react";
import logo from "./logo.svg";
import Counter from "./Components/Counter";
import CounterContainer from "./Containers/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterContainer />
    </div>
  );
}

export default App;
