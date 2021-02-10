import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const FDSButton = ({ type, size, disabled, label }) => {
  return (
    <button className={`${type} ${size}`} disabled={disabled}>
      {label}
    </button>
  );
};

FDSButton.propTypes = {
  type: PropTypes.oneOf([
    "basic",
    "primary",
    "outline",
    "cancel",
    "text-button",
  ]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "giant"]),
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default FDSButton;
