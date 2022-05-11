// @ts-nocheck
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "@mui/material/Select";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import TextInput from "../TextInput";
import { styled } from "@mui/material/styles";

export interface option {
  label: string;
  value: any;
}

export interface SelectInputProps extends SelectProps {
  options: option[];
}

const StyledTextInput = styled(TextInput)`
  .MuiSelect-select {
    color: white;
  }

  .MuiSvgIcon-root {
    fill: #8c8c8c !important;
  }

  & label {
    padding-top: 0 !important;
  }
`;

export default function Select({ options, ...props }: SelectInputProps) {
  return (
    <StyledTextInput
      select
      defaultValue={"None"}
      notched={false}
      SelectProps={{
        displayEmpty: true,
        MenuProps: {
          anchorOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          anchorEl: null,
          PaperProps: {
            sx: {
              ".MuiList-root": {
                paddingTop: "0",
                paddingBottom: "0"
              }
            }
          }
        }
      }}
      IconComponent={<ArrowDropDownRoundedIcon sx={{ fill: "#8c8c8c" }} />}
      {...props}
    >
      {options.map(pair => (
        <MenuItem
          value={pair.value}
          sx={{
            backgroundColor: "#0E151D",
            fontSize: 12,
            color: "#8C8C8C",
            fontWeight: 500,
            height: "34px",
            border: "0px solid transparent",
            fontFamily: [
              "-apple-system",
              "BlinkMacSystemFont",
              "sans-serif"
            ].join(","),
            "&.MuiMenuItem-root.Mui-selected": {
              backgroundColor: "#262626"
            },
            "&.MuiMenuItem-root:hover": {
              backgroundColor: "rgba(38,38,38,0.94)"
            }
          }}
        >
          {pair.label}
        </MenuItem>
      ))}
    </StyledTextInput>
  );
}
