import React, {ChangeEvent, ReactNode} from "react";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import {SelectProps} from "@material-ui/core/Select";
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import {BootStrapInputStyle, DropdownStyle, SelectStyle} from "./SelectInput.styles";

const BootstrapInput = withStyles(BootStrapInputStyle)(InputBase);

const useStyles = makeStyles(DropdownStyle)


const SelectStyled = withStyles(SelectStyle)(Select);

export interface option {
  label: string;
  value: any;
}

export interface SelectInputProps extends SelectProps {
  options: option[]
}

export default function SelectInput({options, ...props}: SelectInputProps) {
  const [value, setValue] = React.useState<any>('');

  const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    setValue(event.target.value as any);
  };

  const classes = useStyles();
  return (
    <SelectStyled
      onChange={handleChange}
      value={value}
      input={<BootstrapInput/>}
      defaultValue={"None"}
      displayEmpty
      MenuProps={{
        classes: {paper: classes.dropdown},
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
      {options.map((pair) => (<MenuItem value={pair.value}>{pair.label}</MenuItem>))}
    </SelectStyled>
  );
}
