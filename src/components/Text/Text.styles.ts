import { PropTypes } from "@material-ui/core";

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
    textAlign?: PropTypes.Alignment;
  }) => ({
    fontWeight: props.fontWeight,
    color: props.textColor,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    textAlign: props.textAlign,
  }),
});
