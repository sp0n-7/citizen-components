import React, { useState } from "react";

import { OutlinedInput } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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
    textColor,
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
