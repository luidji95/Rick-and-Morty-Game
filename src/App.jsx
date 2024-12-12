import { useState } from "react";
import "./App.css";

function App() {
  const initialItems = [
    { isChecked: false, id: 1, image: "imagess/J19ick.png" },
    { isChecked: false, id: 2, image: "imagess/Terry.png" },
    { isChecked: false, id: 3, image: "imagess/abraham.png" },
    { isChecked: false, id: 4, image: "imagess/birdPerson.png" },
    { isChecked: false, id: 5, image: "imagess/gearHead.png" },
    { isChecked: false, id: 6, image: "imagess/michael.png" },
    { isChecked: false, id: 7, image: "imagess/president.png" },
    { isChecked: false, id: 8, image: "imagess/princeNebulon.png" },
    { isChecked: false, id: 9, image: "imagess/rickkk.png" },
    { isChecked: false, id: 10, image: "imagess/snuffles.png" },
    { isChecked: false, id: 11, image: "imagess/squanchy.png" },
    { isChecked: false, id: 12, image: "imagess/vampire.png" },
  ];

  const [items, setItems] = useState(initialItems);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleItemClick = (id) => {
    const clickedItem = items.find((item) => item.id === id);

    if (clickedItem.isChecked) {
      setIsGameOver(true);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > highScore) setHighScore(newScore);

      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, isChecked: true } : item
      );

      const shuffledItems = updatedItems.sort(() => Math.random() - 0.5);
      setItems(shuffledItems);
    }
  };

  const handlePlayAgain = () => {
    setCurrentScore(0);
    setItems(initialItems.map((item) => ({ ...item, isChecked: false })));
    setIsGameOver(false);
  };

  return (
    <div className="container">
      <h1>RICK AND MORTY MEMORY GAME</h1>
      <div className="score-div">
        <h2>Current Score: {currentScore}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="grid-container">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid-item"
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>

      {isGameOver && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Game Over</h2>
            <p>Your score: {currentScore}</p>
            <button onClick={handlePlayAgain}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
