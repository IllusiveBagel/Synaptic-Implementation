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
      <div style={{ width: "100%", height: "100%", backgroundColor: "#282c34" }}>
        <canvas id="canvas" width="600" height="600" />
      </div>
    </div>
  );
};

export default App;