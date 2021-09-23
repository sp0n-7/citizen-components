import React from "react";

import { OutlinedInput } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { baseStyles, Customization } from "./TextInput.styles";

const useStyles = makeStyles(Customization);

const BaseInput = withStyles(baseStyles)(OutlinedInput);

export interface TextInputProps extends OutlinedInputProps {
  edited?: boolean;
}

const TextInput = ({ edited, ...props }: TextInputProps) => {
  const textColor = edited ? "white" : "#8c8c8c";

  const classes = useStyles({
    textColor,
  });

  return <BaseInput {...props} classes={{ input: classes.input }} />;
};

export default TextInput;
