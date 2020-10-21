import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [state, setState] = React.useState(false);
  return (
    <div id="main">
      <p id="para">{state}</p>
      <button id="click" onClick={() => setState(true)}>
        {state ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          "!"
        )}
      </button>
    </div>
  );
}

export default App;
