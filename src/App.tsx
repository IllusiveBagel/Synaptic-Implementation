import React, { useEffect } from "react";
import { blastoff } from "./lib/world";
import "./App.css";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    blastoff(canvas);
  }, []);


  return (
    <div className="App">
      <h1 className="Title">Synaptic</h1>
      <div style={{ width: "100%", height: "100%", backgroundColor: "#282c34" }}>
        <canvas id="canvas" width="600" height="600" />
      </div>
      <p className="Desc">Simple React App Implementing the Synaptic Neural Network Library</p>
    </div>
  );
};

export default App;