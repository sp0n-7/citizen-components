import { PropTypes } from "@mui/material";

export const TextStyles = {
  root: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "sans-serif"].join(","),
    color: "white",
    letterSpacing: "-0.25px",
    display: "inline"
  }
};

export const Configuration = () => ({
  root: (props: {
    fontWeight?: number;
    textColor?: string;
    fontSize?: string;
    lineHeight?: string;
    textAlign?: string;
  }) => ({
    fontWeight: props.fontWeight,
    color: props.textColor,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    textAlign: props.textAlign
  })
});
