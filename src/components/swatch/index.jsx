import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//import { SketchPicker } from "react-color";

function SW({ color, className }) {
  return <div className={className}>{color}</div>;
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
