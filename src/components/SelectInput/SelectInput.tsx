import React from "react";

import { Select } from "@material-ui/core";
import { SelectProps } from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

import styles from "./SelectInput.modules.css";

const BaseInput = withStyles(styles)(Select);

const SelectInput = (props: SelectProps) => {
  return <Select {...props} />;
};

export default SelectInput;
