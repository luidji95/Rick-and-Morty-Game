import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="container">
      <h1>RICK AND MORTY MEMORY GAME</h1>
      <div className="score-div">
        <h2>Current Score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">2</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">5</div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
          <div class="grid-item">10</div>
          <div class="grid-item">11</div>
          <div class="grid-item">12</div>
        </div>
      </div>
    </div>
  );
}

export default App;
