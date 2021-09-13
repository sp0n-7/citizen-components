import React from "react";

import { Chip, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Autocomplete } from "@material-ui/lab";

const StyledAutocomplete = withStyles({
  root: {
    width: "100%",
    margin: "auto",
    "& label": {
      color: "#666666",
    },
    "& label.Mui-focused": {
      color: "#666666",
    },
    height: "44px",
  },
  inputRoot: {
    color: "#666666",
    // Couldnt get to work without !important, MUI overwrites it for some reason
    padding: "6px 10px 0px 10px !important",
  },
  popupIndicator: {
    display: "none",
  },
  clearIndicator: {
    display: "none",
  },
})(Autocomplete);

const StyledChip = withStyles({
  root: {
    backgroundColor: "#1a2633",
    borderRadius: "4px",
    color: "white",
    height: "24px",
    padding: "4px 0px",
    marginRight: "4px",
    marginBottom: "4px",
  },
  label: {
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "capitalize",
    fontWeight: "bold",
    display: "flex",
    textAlign: "center",
    alignContent: "center",
  },
})(Chip);

const StyledInput = withStyles({
  root: {
    padding: "0px !important",
    color: "white",
    height: "44px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#404040",
      },
      "&:hover fieldset": {
        borderColor: "#404040",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#404040",
      },
    },
  },
})(TextField);

interface IProps {
  options: Array<any>;
  inputValue: string;
  handleInputChange: (value: string) => void;
  chipLabel: (option: any) => JSX.Element;
  getOptionSelected: (option: any, value: any) => boolean;
  onDeleteOption: (option: any) => void;
  inputLabel: string;
}

const MultiLabelTextInput = ({
  options,
  inputValue,
  handleInputChange,
  chipLabel,
  getOptionSelected,
  onDeleteOption,
  inputLabel,
}: IProps) => {
  return (
    <StyledAutocomplete
      multiple
      id="tags-outlined"
      options={options}
      value={options}
      inputValue={inputValue}
      open={false}
      limitTags={2}
      getOptionSelected={getOptionSelected}
      filterSelectedOptions
      renderTags={(value) =>
        value.map((option: any) => (
          <StyledChip
            key={option.subArea}
            size="small"
            onDelete={() => onDeleteOption(option)}
            label={chipLabel(option)}
          />
        ))
      }
      renderInput={(params) => (
        <StyledInput
          {...params}
          value={inputValue}
          style={{ height: "44px" }}
          onChange={(e) => handleInputChange(e.target.value.toLowerCase())}
          variant="outlined"
          label={inputLabel}
        />
      )}
    />
  );
};

export default MultiLabelTextInput;
