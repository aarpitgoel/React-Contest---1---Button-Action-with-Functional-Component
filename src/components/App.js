import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [state, setState] = React.useState("");
  return (
    <div id="main">
      <p id="para" >{state}</p>
      <button id="button" onClick={() => setState("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")}></button>
    </div>
  );
}


export default App;
