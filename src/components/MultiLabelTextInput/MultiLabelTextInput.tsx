import React from "react";

import { withStyles } from "@material-ui/styles";
import { Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {
  AutocompleteStyles,
  ChipStyles,
  InputStyles,
} from "./MultiLabelTextInput.styles";

const StyledAutocomplete = withStyles(AutocompleteStyles)(Autocomplete);
const StyledChip = withStyles(ChipStyles)(Chip);
const StyledInput = withStyles(InputStyles)(TextField);
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
