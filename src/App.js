import React, { useState, useMemo } from "react";
import { rgb } from "polished";
import "./styles.css";
import { Card } from "./components/colorcard";
import { ColorForm } from "./components/colorform";
import { Tab } from "./components/tab";

function getRandomInt(max = 255) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomColor() {
  return rgb(getRandomInt(), getRandomInt(), getRandomInt());
}

export default function App() {
  const startColor = useMemo(randomColor, []);
  const [colors, setColors] = useState([]);
  return (
    <div className="App">
      <ColorForm
        color={startColor}
        colorsChange={(newColors) => {
          setColors(newColors);
        }}
      />
      <div>
        <Tab names={["Sample", "Export"]}>
          <Card colors={colors} />
          <div>exports go here</div>
          <div>Undefined tab entry</div>
        </Tab>
      </div>
    </div>
  );
}
