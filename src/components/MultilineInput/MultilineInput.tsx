import React from "react";

import { OutlinedInput } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/core/styles";

import { baseStyles } from "./MultilineInput.styles";

const BaseInput = withStyles(baseStyles)(OutlinedInput);

const MultilineInput = (props: OutlinedInputProps) => {
  const inputProps = { ...props };
  if (props.rows) {
    inputProps.style = {
      ...inputProps.style,
      height: `${36 + 16 * Number(props.rows)}px`,
    };
  }
  return <BaseInput {...inputProps} multiline />;
};

export default MultilineInput;
