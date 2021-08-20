export const BootStrapInputStyle = () => ({
  input: {
    borderRadius: "4px!important",
    backgroundColor: 'transparent',
    border: '1px solid #333333',
    fontSize: 12,
    minWidth: '50px',
    lineHeight: '16px',
    padding: '10px 26px 10px 12px',
    fontWeight: 500,
    color: '#8C8C8C',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
  },
  '&:focus': {
    borderRadius: 4,
  }
})

export const DropdownStyle = () => ({
  dropdown: {
    "& ul": {
      backgroundColor: "#0E151D",
      border: "1px solid #333333",
      "& li:hover": {
        backgroundColor: '#262626'
      },
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    "& li": {
      fontSize: 12,
      color: '#8C8C8C',
      fontWeight: 500,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
      ].join(','),
      paddingTop: "8px",
      paddingBottom: "8px",
    },
    "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: '#212121'
    },
  },
})

export const SelectStyle = () => ({
  icon: {
    color: '#666666',
    fontSize: '19px',
    padding: "2px 10px",
  },
})
