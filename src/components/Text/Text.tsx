import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { Configuration, TextStyles } from "./Text.styles";
import { TypographyProps } from "@material-ui/core/Typography";

export interface TextProps {
  size: "small" | "medium";
  weight?: "normal" | "semibold" | "bold";
  color: string;
  children: React.ReactNode;
}

const TypographyStyled = withStyles(TextStyles)(Typography);

const useStyles = makeStyles(Configuration);

const Text = ({ size, color, children, weight }: TextProps) => {
  let fontWeight;
  let textColor;
  let fontSize;
  let lineHeight;

  switch (size) {
    case "small":
      fontSize = "12px";
      lineHeight = "16px";
      break;
    case "medium":
      fontSize = "15px";
      lineHeight = "20px";
      break;
  }

  switch (color) {
    case "primary":
      textColor = "white";
      break;
    case "lightgrey":
      textColor = "#b3b3b3";
      break;
    case "grey":
      textColor = "#8c8c8c";
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

  const classes = useStyles({ textColor, fontWeight, fontSize, lineHeight });

  return (
    <TypographyStyled classes={{ root: classes.root }}>
      {children}
    </TypographyStyled>
  );
};

export default Text;
