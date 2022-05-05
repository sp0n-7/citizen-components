import React, { useState } from "react";

import { OutlinedInput } from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { withStyles, makeStyles } from "@mui/styles";

import { baseStyles, Customization } from "./MultilineInput.styles";

const useStyles = makeStyles(Customization);

const BaseInput = withStyles(baseStyles)(OutlinedInput);

export interface MultilineInputProps extends OutlinedInputProps {
  edited?: boolean;
}

const MultilineInput = (props: OutlinedInputProps) => {
  const [originalValue, setOriginalValue] = useState(props.value);
  const textColor = originalValue !== props.value ? "white" : "#8c8c8c";

  const classes = useStyles({
    textColor
  });

  return (
    <BaseInput
      {...props}
      multiline
      classes={{ input: classes.input }}
      maxRows={Infinity}
    />
  );
};

export default MultilineInput;
