export const baseStyles = {
  root: {
    width: "200px",
    color: "#8c8c8c",
    alignItems: "normal",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
  },
  notchedOutline: {
    "& > legend": {
      visibility: "visible",
      fontWeight: "600",
      fontSize: "10px",
      lineHeight: "16px",
      color: "#8C8C8C",
    },
  },
  multiline: {
    padding: "14px 10px",
  },
};
