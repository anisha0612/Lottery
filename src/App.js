import React from "react";
import Lottery from "./Lottery/Lottery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="PowerBall" numBalls={1} maxNum={10} />
    </div>
  );
}

export default App;
