import React, { useState, useEffect, useRef } from "react";
import { readableColor, complement, adjustHue } from "polished";
import "./styles.css";
import { Swatch } from "./components/swatch";
import { Header, Row } from "./components/header";
import { Card, colorLookup } from "./components/colorcard";

function getColors(name, color, rotation = 0) {
  const newColor = adjustHue(rotation, color);
  return {
    name,
    main: newColor,
    readable: readableColor(newColor),
    complement: complement(newColor),
    complementReadable: readableColor(complement(newColor))
  };
}

function ColorSet({ colors }) {
  return (
    <Row>
      <Swatch color={colors.main} readableColor={colors.readable} />
      <Swatch
        color={colors.complement}
        readableColor={colors.complementReadable}
      />
    </Row>
  );
}

function setVariableStyles(colors) {
  colors.forEach((color) => {
    document.documentElement.style.setProperty(
      colorLookup(color.name, "main"),
      color.main
    );
    document.documentElement.style.setProperty(
      colorLookup(color.name, "main", "text"),
      color.readable
    );
    document.documentElement.style.setProperty(
      colorLookup(color.name, "complement"),
      color.complement
    );
    document.documentElement.style.setProperty(
      colorLookup(color.name, "complement", "text"),
      color.complementReadable
    );
  });
}

export default function App() {
  const [mainColor] = useState("#2A1D94");
  const [colors, setColors] = useState([]);
  const lastColor = useRef();

  useEffect(() => {
    if (!lastColor.current) {
      let colors = [
        getColors("main", mainColor),
        getColors("b", mainColor, 120),
        getColors("c", mainColor, -120)
      ];

      console.log(colors);

      setColors(colors);
      setVariableStyles(colors);
      lastColor.current = colors;
    }
  }, [mainColor, colors, lastColor]);

  return (
    <div className="App">
      <Header>
        {colors.map((colorSet) => {
          return <ColorSet colors={colorSet} key={colorSet.main} />;
        })}
      </Header>
      <div>
        <Card colors={colors} />
      </div>
    </div>
  );
}
