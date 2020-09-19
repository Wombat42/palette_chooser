import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ChromePicker } from "react-color";
function PCKR(props) {
  const {
    show,
    onClose = () => {},
    onChange = () => {},
    className,
    color
  } = props;
  return show ? (
    <div className={className}>
      <div
        className="cover"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      />
      <ChromePicker color={color} onChange={onChange} onClick={(event) => {}} />
    </div>
  ) : null;
}

const Picker = styled(PCKR)`
  position: absolute;
  z-index: 50;
  border: 2px solid blue;

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border: 3px dashed red;
  }
`;

function SW({ color, className, name, group, onChange = () => {} }) {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <div
      className={className}
      onClick={(event) => {
        setShowPicker(true);
      }}
    >
      <div>{color}</div>
      <Picker
        show={showPicker}
        color={color}
        onChange={(event) => {
          onChange({ color, newColor: event.hex, name, group });
        }}
        onClose={() => {
          setShowPicker(false);
        }}
      />
    </div>
  );
}

export const Swatch = styled(SW)`
  background-color: ${(props) => props.colorVar};
  color: ${(props) => props.readableColor};
  display: table-cell;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  position: relative;
`;

Swatch.propTypes = {
  color: PropTypes.string
};
