import React from "react";

import { OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/core/styles";

import { baseStyles } from "./NumberInput.styles";
import style from "./NumberInput.module.css";

const BaseInput = withStyles(baseStyles)(OutlinedInput);

interface IProps extends OutlinedInputProps {
  onChangeUp: () => void;
  onChangeDown: () => void;
}

const NumberInput = ({ onChangeUp, onChangeDown, ...props }: IProps) => {
  return (
    <BaseInput
      {...props}
      startAdornment={
        <div className={style.incrementArrows}>
          <img
            onClick={onChangeDown}
            src="https://assets.citizen.com/pos_assets/DownChevron.svg"
          />
        </div>
      }
      endAdornment={
        <div className={style.incrementArrows}>
          <img
            onClick={onChangeUp}
            src="https://assets.citizen.com/pos_assets/UpChevron.svg"
          />
        </div>
      }
    />
  );
};

export default NumberInput;
