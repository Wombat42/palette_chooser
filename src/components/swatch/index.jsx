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
      <div onClick={onClose} />
      <ChromePicker color={color} onChange={onChange} />
    </div>
  ) : null;
}

const Picker = styled(PCKR)`
  position: absolute;
  z-index: 50;

  & > div {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

function SW({ color, className, name, group, onChange = () => {} }) {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <>
      <div
        className={className}
        onClick={() => {
          setShowPicker(true);
        }}
      >
        {color}
      </div>
      <Picker
        show={showPicker}
        color={color}
        onChange={(event) => {
          console.log("picker", event);
          onChange({ color, newColor: event.hex, name, group });
        }}
        onClose={() => setShowPicker(false)}
      />
    </>
  );
}

export const Swatch = styled(SW)`
  background-color: ${(props) => props.color};
  color: ${(props) => props.readableColor};
  display: table-cell;
  padding: 10px;
  text-align: left;
  vertical-align: middle;
`;

Swatch.propTypes = {
  color: PropTypes.string
};
