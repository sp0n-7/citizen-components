import React from "react";
import classnames from "classnames"
import style from "./ToggleButton.module.css"

export interface ToggleButtonProps  {
  label: string;
  onChange: Function;
  on: boolean;
  onLabel?: string;
  disabled?: boolean;
};

const ToggleButton = ({ label, onChange, on, onLabel, disabled } : ToggleButtonProps) => {
    return (
        <div className={classnames(style.container, { [style.on]: on })}>
            {!!label && <div className={style.label}>{label}</div>}
            <button onClick={() => onChange()} className={style.toggle} disabled={disabled}>
                <div className={style.circleContainer}>
                    <div className={style.circle} />
                </div>
            </button>
            {!!onLabel && <div className={style.offLabel}>{onLabel}</div>}
        </div>
    )
}
export default ToggleButton;
