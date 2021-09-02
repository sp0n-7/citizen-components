import React from "react";
import MaterialCheckbox from '@material-ui/core/Checkbox';
import {CheckboxProps} from "@material-ui/core/Checkbox";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { CheckboxStyle } from "./Checkbox.styles"
import {Configuration} from "./Checkbox.styles";

const CheckboxStyled = withStyles(CheckboxStyle)(MaterialCheckbox);

export interface StyledCheckboxProps extends CheckboxProps {
  checked?: boolean;
  size?: "small" | "medium";
}

const useStyles = makeStyles(Configuration);


export default function Checkbox({ checked, onChange, size }: StyledCheckboxProps) {
  let transform

  switch (size) {
    case undefined:
    case "small":
      transform = 1
      break;
    case "medium":
      transform = 1.75
      break;
  }

  const classes = useStyles({
    transform,
  });

  return (
    <CheckboxStyled classes={{ root: classes.root }} checked={checked} disableRipple onChange={onChange} />
  );
};
