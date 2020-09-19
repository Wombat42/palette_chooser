import React, { useState } from "react";
import "./styles.css";
import { Card } from "./components/colorcard";
import { ColorForm } from "./components/colorform";

export default function App() {
  const [colors, setColors] = useState([]);
  return (
    <div className="App">
      <ColorForm
        color={"#2A1D94"}
        colorsChange={(newColors) => {
          setColors(newColors);
        }}
      />
      <div>
        <Card colors={colors} />
      </div>
    </div>
  );
}
