import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const FDSButton = ({ type, size, disabled, label, onClick }) => {
  return (
    <button className={`${type} ${size}`} disabled={disabled} onClick={onClick}>
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
  onClick: PropTypes.func,
};

export default FDSButton;
