import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  return <h1>RICKY AND MORTY MEMORY GAME</h1>
  <h2>Current score: {currentScore} </h2>;
  <h2> High Score: {highScore} </h2>
}

export default App;
