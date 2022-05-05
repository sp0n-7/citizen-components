import React, { ChangeEvent } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "@mui/material/Select";
import MaterialUISelect from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import {
  BootStrapInputStyle,
  DropdownStyle,
  SelectStyle
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
      input={<TextInput notched label={props.label} />}
      defaultValue={"None"}
      displayEmpty
      MenuProps={{
        classes: { paper: classes.dropdown },
        anchorOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        getContentAnchorEl: null
      }}
      IconComponent={ArrowDropDownRoundedIcon}
      {...props}
    >
      {options.map(pair => (
        <MenuItem value={pair.value}>{pair.label}</MenuItem>
      ))}
    </SelectStyled>
  );
}
