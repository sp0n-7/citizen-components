export const TextStyles = {
  root: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
    color: "white",
    letterSpacing: "-0.25px",
  },
};

export const Configuration = () => ({
  root: (props: {
    fontWeight?: number;
    textColor?: string;
    fontSize?: string;
    lineHeight?: string;
  }) => ({
    fontWeight: props.fontWeight,
    color: props.textColor,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
  }),
});
