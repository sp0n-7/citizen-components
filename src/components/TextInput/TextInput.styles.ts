export const baseStyles = {
  root: {
    marginBottom: "16px",
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
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
    fontWeight: 500,
  },
  input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#8c8c8c',
      opacity: 100,
    },
    fontSize: "12px",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
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
