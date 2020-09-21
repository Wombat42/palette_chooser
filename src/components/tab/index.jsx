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
      <div className="tab-strip">
        {tabNames.map((name, index) => (
          <div
            onClick={(event) => {
              event.preventDefault();
              setSelected(index);
            }}
            key={index}
            className={`tab-strip-heading ${
              index === selected ? "selected" : ""
            }`}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {children[selected] ? children[selected] : ""}
      </div>
    </div>
  );
}

export const Tab = styled(T)`
  margin-top: 5px;
  .tab-strip {
    display: flex;
    flex-direction: row;
    justify-content: start;
    background-color: var(--color-accent-dark);
    padding: 10px;
  }

  .tab-strip-heading {
    font-size: 1.25rem;
    margin-left: 20px;
    padding: 10px;
    text-transform: capitalize;
    color: var(--color-accent-light);
  }

  .tab-content {
  }

  .selected {
    color: var(--color-text-contrast);
    border: 1px solid var(--color-accent-middle);
    background: var(--color-accent-middle);
    border-radius: 5px;
  }
`;
