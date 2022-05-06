export const baseStyles = {
  root: {
    width: "100%",
    color: "#8c8c8c",
    alignItems: "normal",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333"
    }
  },
  disabled: {
    color: "#8c8c8c",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333 !important"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333333"
    }
  },
  notchedOutline: {
    "& > legend": {
      visibility: "visible",
      fontWeight: "600",
      fontSize: "10px",
      lineHeight: "16px",
      color: "#8C8C8C"
    }
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#8c8c8c",
      opacity: 100
    },
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(",")
  },
  multiline: {
    padding: "14px 10px"
  }
};

export const Customization = () => ({
  input: (props: { textColor?: string }) => ({
    color: props.textColor
  })
});
