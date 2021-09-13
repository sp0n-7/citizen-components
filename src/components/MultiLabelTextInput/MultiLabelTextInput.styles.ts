import { withStyles } from "@material-ui/styles";
import { Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const StyledAutocomplete = withStyles({
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

export const StyledChip = withStyles({
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

export const StyledInput = withStyles({
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
