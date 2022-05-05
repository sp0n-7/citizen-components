import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledAutocomplete,
  StyledChip,
  StyledInput
} from "./MultiLabelTextInput.styles";

interface IProps {
  options: Array<any>;
  inputValue: string;
  handleInputChange: (value: string) => void;
  chipLabel: (option: any) => JSX.Element;
  getOptionSelected: (option: any, value: any) => boolean;
  onDeleteOption: (option: any) => void;
  inputLabel: string;
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  onClear: () => void;
}

const MultiLabelTextInput = ({
  options,
  inputValue,
  handleInputChange,
  chipLabel,
  getOptionSelected,
  onDeleteOption,
  inputLabel,
  open,
  onClose,
  onOpen,
  onClear
}: IProps) => {
  return (
    <StyledAutocomplete
      multiple
      id="tags-outlined"
      options={options}
      value={options}
      inputValue={inputValue}
      limitTags={2}
      open={open}
      onClose={(e, closeReason) => {
        if (closeReason === "toggleInput") {
          onClose();
        }
      }}
      openOnFocus
      onOpen={e => {
        onOpen();
      }}
      getLimitTagsText={more => ""}
      getOptionSelected={getOptionSelected}
      filterSelectedOptions
      renderTags={value =>
        value.map((option: any) => (
          <StyledChip
            key={option.key}
            size="small"
            onDelete={() => onDeleteOption(option)}
            label={chipLabel(option)}
          />
        ))
      }
      renderInput={params => (
        <StyledInput
          {...params}
          value={inputValue}
          onChange={e => handleInputChange(e.target.value.toLowerCase())}
          variant="outlined"
          label={inputLabel}
        />
      )}
      popupIcon={<ArrowDropDownIcon style={{ fontSize: "28px" }} />}
      closeIcon={<CloseIcon fontSize="small" onClick={onClear} />}
    />
  );
};

export default MultiLabelTextInput;
