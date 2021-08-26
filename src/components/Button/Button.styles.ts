export const ButtonStyle = () => ({
  root: {
    borderRadius: "30px",
    padding: '15px  25px 15px 25px',
  },
  label: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
    fontSize: "13px",
    lineHeight: "16px",
  },
})

export const PropColors = () => ({
  colors: (props: {
    backgroundColor?: string;
    textColor?: string;
    fontWeight?: number;
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.textColor,
    "&:hover": {
      backgroundColor: props.backgroundColor
    },
    fontWeight: props.fontWeight,
  }),
})
