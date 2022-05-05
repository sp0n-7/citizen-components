import { withStyles } from "@mui/styles";
import { Chip, TextField } from "@mui/material";
import { Autocomplete } from "@mui/lab";

export const StyledAutocomplete = withStyles({
  root: {
    width: "100%",
    margin: "auto",
    "& label": {
      color: "#666666"
    },
    "& label.Mui-focused": {
      color: "#666666"
    },
    height: "fit-content"
  },
  inputRoot: {
    color: "#666666",
    // Couldnt get to work without !important, MUI overwrites it for some reason
    padding: "6px 10px 0px 10px !important",
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(",")
  },
  paper: {
    display: "none"
  },
  clearIndicator: {
    color: "#666666",
    "&:hover": {
      color: "white",
      cursor: "pointer"
    }
  },
  popupIndicator: {
    color: "#666666",
    "&:hover": {
      color: "white",
      cursor: "pointer"
    }
  },
  endAdornment: {
    marginTop: "-2px",
    right: "0px !important"
  }
})(Autocomplete);

export const StyledChip = withStyles({
  root: {
    backgroundColor: "#1a2633",
    borderRadius: "4px",
    color: "white",
    height: "24px",
    padding: "4px 0px",
    marginRight: "4px",
    marginBottom: "4px"
  },
  label: {
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "capitalize",
    fontWeight: "bold",
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(",")
  }
})(Chip);

export const StyledInput = withStyles({
  root: {
    padding: "0px !important",
    color: "white",
    height: "fit-content",
    "& label:not(.MuiInputLabel-shrink)": {
      marginTop: "-6px"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333333"
      },
      "&:hover fieldset": {
        borderColor: "#333333"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#333333"
      }
    }
  }
})(TextField);
