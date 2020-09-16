import React, { useState } from "react";
import "./styles.css";
import { Card } from "./components/colorcard";
import { ColorForm } from "./components/colorform";

export default function App() {
  const [mainColor] = useState("#2A1D94");
  const [colors, setColors] = useState([]);
  return (
    <div className="App">
      <ColorForm
        color={mainColor}
        colorsChange={(colors) => setColors(colors)}
      />
      <div>
        <Card colors={colors} />
      </div>
    </div>
  );
}
