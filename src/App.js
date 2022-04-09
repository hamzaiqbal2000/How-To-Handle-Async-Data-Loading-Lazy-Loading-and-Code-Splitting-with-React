import React, { useState, useReducer } from "react";
import RiverInformation from "./components/RiverInformation/RiverInformation";

function App() {
  const [river, setRiver] = useState("nile");
  const [show, toggle] = useReducer((state) => !state, true);
  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toggle Details</button>
      </div>
      <button onClick={() => setRiver("nile")}>Nile</button>
      <button onClick={() => setRiver("amazon")}>Amazon</button>
      <button onClick={() => setRiver("yangtze")}>Yangtze</button>
      <button onClick={() => setRiver("mississippi")}>Mississippi</button>
      {show && <RiverInformation name={river} />}
    </div>
  );
}

export default App;
//will make generic services for returning the data
// A service refers to any code that can be reused to accompish a specfic task
