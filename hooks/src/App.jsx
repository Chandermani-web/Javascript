import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan",
    "Magenta", "Lime", "Indigo", "Maroon", "Gold", "Teal", "Navy", "Olive", "Black", "White"
  ];

  const bgColors = [
    "#FF0000", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#800080", "#FFC0CB", "#A52A2A", "#808080", "#00FFFF",
    "#FF00FF", "#00FF00", "#4B0082", "#800000", "#FFD700", "#008080", "#000080", "#808000", "#000000", "#FFFFFF"
  ];

  let [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = bgColors[index];
  }, [index]);

  let changeColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>My favourite color is {colors[index]}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
