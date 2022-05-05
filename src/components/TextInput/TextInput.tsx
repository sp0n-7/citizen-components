import React, { useState } from "react";

import { OutlinedInput } from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { makeStyles, withStyles } from "@mui/styles";

import { baseStyles, Customization } from "./TextInput.styles";

const useStyles = makeStyles(Customization);

const BaseInput = withStyles(baseStyles)(OutlinedInput);

const TextInput = (props: OutlinedInputProps) => {
  const [originalValue, setOriginalValue] = useState(props.value);
  const textColor = originalValue !== props.value ? "white" : "#8c8c8c";

  const classes = useStyles({
    textColor
  });

  return <BaseInput {...props} classes={{ input: classes.input }} />;
};

export default TextInput;
