export const baseStyles = {
  root: {
    height: "44px",
    width: "100%",
    color: "#8c8c8c",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
    fontWeight: 500,
    paddingRight: "0px",
    paddingLeft: "0px",

    "& > div": {
      width: "30px",
      height: "100%",
    },
  },
  disabled: {
    color: "#8c8c8c",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333 !important",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333",
    },
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#8c8c8c",
      opacity: 100,
    },
    width: "12px",
    fontSize: "12px",
    textAlign: "center" as const,
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
  },

  notchedOutline: {
    "& > legend": {
      visibility: "visible",
      fontSize: "10px",
      lineHeight: "16px",
      color: "#8C8C8C",
      paddingBottom: 5,
    },
  },
};
