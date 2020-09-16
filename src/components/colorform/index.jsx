import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { Swatch } from "../swatch";
import { colorLookup } from "../colorcard";
import { readableColor, complement, adjustHue } from "polished";

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

export const Row = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px;
`;

function LeftSide(props) {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
}

function RightSide(props) {
  const { className, children, colors } = props;
  return <div className={className}>{children}</div>;
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

function CF(props) {
  const { className, color: mainColor, colorsChange } = props;
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
      if (typeof colorsChange === "function") {
        colorsChange([...colors]);
      }
    }
  }, [mainColor, colors, lastColor, colorsChange]);
  return (
    <Header>
      <div className={className}>
        <LeftSide>color form</LeftSide>
        <RightSide>
          {colors.map((colorSet) => {
            return <ColorSet colors={colorSet} key={colorSet.main} />;
          })}
        </RightSide>
      </div>
    </Header>
  );
}

export const ColorForm = styled(CF)`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(200px, 400px) auto;
  background-color: var(--background-color);
`;
