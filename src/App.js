import "./styles.css";

import React, { useState } from "react";
var i = 0;

const App = () => {
  const [init, setInit] = useState(i);

  const increment = (e) => {
    i++;
    setInit(i);
    // e.preventDefault();
  };
  return (
    <div>
      <h1>{init}</h1>
      <button onClick={() => increment()}>Click</button>
    </div>
  );
};

export default App;
