import React from "react";

import { OutlinedInput } from "@material-ui/core";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { withStyles } from "@material-ui/core/styles";

import { baseStyles } from "./TextInput.styles";

const BaseInput = withStyles(baseStyles)(OutlinedInput);

const TextInput = (props: OutlinedInputProps) => {
  return <BaseInput notched {...props} />;
};

export default TextInput;
