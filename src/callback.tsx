import { useState } from "react";

interface CallbackProps {
  onChangeColor: (color: string) => void;
}

export default function Callback({ onChangeColor }: CallbackProps) {
  const [activeColor, setActiveColor] = useState<string>("");

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    onChangeColor(color || "white");
  };

  return (
    <input
      type="text"
      placeholder="Type red, blue, green, purple..."
      value={activeColor}
      onChange={(e) => handleColorChange(e.target.value)}
      style={{
        padding: "12px",
        fontSize: "18px",
        width: "300px",
      }}
    />
  );
}