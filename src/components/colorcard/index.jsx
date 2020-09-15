import * as React from "react";
import styled from "styled-components";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function BL(props) {
  const { color, description, text, className, style } = props;
  return (
    <div className={className} style={style}>
      <div className="rgb-code">{color}</div>
      <div className="group-name">{text}</div>
      {description ? <div className="description">{description}</div> : ""}
    </div>
  );
}

export function colorLookup(...params) {
  const varString = params.join("-");
  return `--${varString}-color`;
}

export function varLookup(...params) {
  return `var(${colorLookup(...params)})`;
}

export const Block = styled(BL)`
  position: relative;
  border-radius: var(--border-radius);
  background-color: ${(props) => varLookup(props.group, props.var)};
  color: ${(props) => varLookup(props.group, props.var, "text")};
  margin: 20px;
  padding: 1rem;
  text-align: left;
  font-family: var(--font-code);
  .rgb-code {
    text-transform: uppercase;
  }
  .group-name {
    text-transform: capitalize;
  }
  .description {
    margin-top: 20px;
    font-family: var(--font-description);
    font-size: 1.5rem;
    text-transform: none;
  }
`;

export const MainBlock = styled(Block)`
  transform: unset;
  grid-column: main-start / main-end;
  grid-row: 1 / 7;
  z-index: 0;
`;

export const SmallBlock = styled(Block)`
  box-shadow: 5px 5px 10px var(--color-shadow);
  transform: translate(0px, 20px);
  grid-column: sample-start / sample-end;
  grid-row: 1;
  z-index: 10;
`;

function C(props) {
  const { className, colors } = props;
  const [mainColor] = colors;
  const otherColors = colors.slice(1);

  return (
    <div className={className}>
      {mainColor ? (
        <div className="block-grid">
          <MainBlock
            color={mainColor.main}
            group={mainColor.name}
            var="main"
            text="Main"
            description={lorem}
          />
          <SmallBlock
            color={mainColor.complement}
            group={mainColor.name}
            var="complement"
            text="Complementary"
            variant="small"
          />
          {otherColors.map((color, index) => {
            return (
              <>
                <SmallBlock
                  color={color.main}
                  group={color.name}
                  var="main"
                  text="main"
                  style={{
                    gridRow: `${(index + 1) * 2}`
                  }}
                />
                <SmallBlock
                  color={color.main}
                  group={color.name}
                  var="complement"
                  text="Complementary"
                  style={{
                    gridRow: `${(index + 1) * 2 + 1}`
                  }}
                />
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export const Card = styled(C)`
  display: grid;
  place-items: center center;

  .block-grid {
    display: grid;
    grid-template-columns: [main-start] 300px [sample-start] 100px [main-end] 100px [sample-end];
    grid-template-rows: [first-line] repeat(auto-fill, 100px) [last-line];
  }
`;
