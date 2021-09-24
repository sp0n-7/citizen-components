import React from "react";

import { OutlinedInput } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { baseStyles, Customization } from "./MultilineInput.styles";

const useStyles = makeStyles(Customization);

const BaseInput = withStyles(baseStyles)(OutlinedInput);

export interface MultilineInputProps extends OutlinedInputProps {
  edited?: boolean;
}

const MultilineInput = ({ edited, ...props }: MultilineInputProps) => {
  const textColor = edited ? "white" : "#8c8c8c";

  const inputProps = { ...props };
  if (props.rows) {
    inputProps.style = {
      ...inputProps.style,
      height: `${36 + 16 * Number(props.rows)}px`,
    };
  }

  const classes = useStyles({
    textColor,
  });

  return (
    <BaseInput {...inputProps} multiline classes={{ input: classes.input }} />
  );
};

export default MultilineInput;
