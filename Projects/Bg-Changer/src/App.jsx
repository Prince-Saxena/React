import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // Default color

  const handleColorChange = (newColor) => {
    console.log(`Changing color to: ${newColor}`); // Debugging line
    setColor(newColor);
  };

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="n">
        <div className="w-75 d-flex justify-content-around p-2">
          <button
            className="btn btn-success"
            onClick={() => handleColorChange("green")}
          >
            Green
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleColorChange("red")}
          >
            Red
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleColorChange("blue")}
          >
            Blue
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleColorChange("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
