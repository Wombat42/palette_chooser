import React, { useMemo, useState } from "react";
import styled from "styled-components";
function T(props) {
  const { children, className, names } = props;
  const [selected, setSelected] = useState(0);
  const tabNames = useMemo(() => {
    let tNames = [...names];
    while (tNames.length < children.length) {
      tNames.push(`Unknown tab ${tNames.length}`);
    }
    return tNames;
  }, [children, names]);
  return (
    <div className={className}>
      {tabNames.map((name, index) => (
        <div
          key={index}
          className={`tab ${index === selected ? "selected" : ""}`}
        >
          <div>{name}</div>
          {index === selected && index < children.length ? (
            <div>{children[index]}</div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
}

export const Tab = styled(T)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 20px;

  .tab {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  .selected {
    color: green;
  }
`;
