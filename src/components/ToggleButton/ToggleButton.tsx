import React from "react";
import classnames from "classnames";
import style from "./ToggleButton.module.css";

export interface ToggleButtonProps {
  label: string;
  onClick: () => void;
  on: boolean;
  disabled?: boolean;
  navBar?: boolean;
}

const ToggleButton = ({ label, onClick, on, disabled, navBar }: ToggleButtonProps) => {
  return (
    <div className={style.toggleContainer}>
      {label}
      <div
        className={classnames(
          style.toggle,
          { [style.toggleOn]: on && !navBar },
          { [style.toggleOff]: !on && !navBar},
          { [style.toggleOnNavBar]: on && navBar},
          { [style.toggleOffNavBar]: !on && navBar},
        )}
        onClick={(e) => {
          if (!disabled) onClick();
        }}
      >
        <div className={style.toggleIndicator}/>
      </div>
    </div>
  );
};
export default ToggleButton;
