import { useState } from "react";
import Callback from "./Callback";

export default function App() {
  const [color, setColor] = useState<string>("white");

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        padding: "40px",
        color: color === "black" ? "white" : "black",
      }}
    >
      <h1>Change Background Color</h1>
      <p>Current color: {color}</p>

      <Callback onChangeColor={setColor} />
    </div>
  );
}
