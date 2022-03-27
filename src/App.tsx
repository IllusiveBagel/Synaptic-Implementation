import React, { useEffect } from "react";
import { blastOff } from "./lib/World";
import "./App.css";

function App() {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    blastOff(canvas as HTMLCanvasElement);
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