import React, { useState } from "react";

import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const BaseInput = styled(TextField)`
  .MuiOutlinedInput-root {
    height: 44px;
    width: 100%;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 12px;
    border-color: #333333;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #333333 !important;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #333333 !important;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #333333 !important;
  }

  &.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: #333333 !important;
    color: #8c8c8c !important;
  }

  &:hover &.Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: #333333 !important;
  }

  &::placeholder {
    text-overflow: ellipsis;
    color: #8c8c8c !important;
    opacity: 100;
    font-size: 12px;
  }

  & label {
    visibility: visible;
    opacity: 1;
    font-weight: 540;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    line-height: 16px;
    color: #8c8c8c !important;
    padding-top: 5px;
  }
`;

const TextInput = (props: TextFieldProps) => {
  const [originalValue, setOriginalValue] = useState(props.value);
  const textColor = originalValue !== props.value ? "white" : "#8c8c8c";

  return (
    <BaseInput
      {...props}
      sx={{
        color: textColor,
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: textColor
        }
      }}
      variant="outlined"
    />
  );
};

export default TextInput;
