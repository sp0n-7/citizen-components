export const ButtonStyle = () => ({
  root: {
    borderRadius: "20px",
  },
  label: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
    fontSize: "12px",
    lineHeight: "16px",
  },
});

export const Customization = () => ({
  root: (props: {
    backgroundColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    padding?: string;
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.textColor,
    "&:hover": {
      backgroundColor: props.backgroundColor,
    },
    fontWeight: 600,
    width: props.width,
    height: props.height,
    padding: props.padding,
  }),
});
