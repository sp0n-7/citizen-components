import React from "react";
import { Typography } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

import { Configuration, TextStyles } from "./Text.styles";

import { PropTypes } from "@mui/material";

export interface TextProps {
  size?: "xs" | "small" | "medium";
  weight?: "normal" | "semibold" | "bold";
  color: string;
  children: React.ReactNode;
  align?: string | undefined;
  style?: React.CSSProperties;
}

const TypographyStyled = withStyles(TextStyles)(Typography);

// @ts-ignore
const useStyles = makeStyles(Configuration);

const Text = ({ size, color, children, weight, align, style }: TextProps) => {
  let fontWeight;
  let textColor;
  let fontSize;
  let lineHeight;

  switch (size) {
    case "xs":
      fontSize = "10px";
      lineHeight = "16px";
      break;
    case "small":
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "medium":
      fontSize = "15px";
      lineHeight = "20px";
      break;
    default:
      fontSize = "12px";
      lineHeight = "16px";
      break;
  }

  switch (color) {
    case undefined:
    case "primary":
      textColor = "white";
      break;
    case "lightgrey":
      textColor = "#b3b3b3";
      break;
    case "grey":
      textColor = "#8c8c8c";
      break;
    case "lightblue":
      textColor = "#4da6ff";
      break;
    default:
      textColor = color;
      break;
  }

  switch (weight) {
    case undefined:
    case "normal":
      fontWeight = 400;
      break;
    case "semibold":
      fontWeight = 600;
      break;
    case "bold":
      fontWeight = 700;
      break;
  }

  const classes = useStyles({
    textColor,
    fontWeight,
    fontSize,
    lineHeight,
    textAlign: align
  });

  return (
    <TypographyStyled classes={{ root: classes.root }} style={style}>
      {children}
    </TypographyStyled>
  );
};

export default Text;
