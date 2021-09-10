import React from "react";
import classnames from "classnames";
import style from "./ToggleButton.module.css";

export interface ToggleButtonProps {
  label: string;
  onClick: () => void;
  on: boolean;
  disabled?: boolean;
  color?: string;
}

const ToggleButton = ({ label, onClick, on, disabled }: ToggleButtonProps) => {
  return (
    <div className={style.toggleContainer}>
      {label}
      <div
        className={classnames(
          style.toggle,
          { [style.toggleOn]: on },
          { [style.toggleOff]: !on },
          { [style.disabled]: disabled }
        )}
        onClick={(e) => {
          if (!disabled) onClick();
        }}
      >
        <div className={style.toggleIndicator}></div>
      </div>
    </div>
  );
};
export default ToggleButton;
