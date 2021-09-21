import React, { ChangeEvent } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import { SelectProps } from "@material-ui/core/Select";
import MaterialUISelect from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import {
  BootStrapInputStyle,
  DropdownStyle,
  SelectStyle,
} from "./Select.styles";
import TextInput from "../TextInput";

const useStyles = makeStyles(DropdownStyle);
const SelectStyled = withStyles(SelectStyle)(MaterialUISelect);

export interface option {
  label: string;
  value: any;
}

export interface SelectInputProps extends SelectProps {
  options: option[];
}

export default function Select({ options, ...props }: SelectInputProps) {
  const classes = useStyles();
  return (
    <SelectStyled
      input={<TextInput notched label="Hey there label" />}
      defaultValue={"None"}
      displayEmpty
      MenuProps={{
        classes: { paper: classes.dropdown },
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        getContentAnchorEl: null,
      }}
      IconComponent={ArrowDropDownRoundedIcon}
      {...props}
    >
      {options.map((pair) => (
        <MenuItem value={pair.value}>{pair.label}</MenuItem>
      ))}
    </SelectStyled>
  );
}
