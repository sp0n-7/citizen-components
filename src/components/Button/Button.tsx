import React from "react";
import MaterialButton from "@material-ui/core/Button";
import { ButtonProps } from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ButtonStyle, Customization } from "./Button.styles";

const ButtonStyled = withStyles(ButtonStyle)(MaterialButton);

export interface StyledButtonProps extends ButtonProps {
  primary?: boolean;
  buttonType?: "submit" | "warning" | "active" | "secondary";
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const useStyles = makeStyles(Customization);

export default function Button({
  buttonType,
  onClick,
  width,
  size,
  ...props
}: StyledButtonProps) {
  let backgroundColor;
  let textColor;
  let height;
  let padding;
  let border;

  if (buttonType === "submit") {
    if (props.disabled) {
      backgroundColor = "rgba(77, 166, 255, 0.3)";
      textColor = "rgba(255, 255, 255, 0.3)";
    } else {
      backgroundColor = "#4DA6FF";
      textColor = "white";
    }
  } else if (buttonType === "warning") {
    if (props.disabled) {
      backgroundColor = "background: rgba(51, 28, 31, 0.3)";
      textColor = "rgba(204, 133, 141, 0.3)";
    } else {
      backgroundColor = "#331C1F";
      textColor = "#CC858D";
    }
  } else if (buttonType === "active") {
    if (props.disabled) {
      backgroundColor = "#1A2633";
      border = "1px solid rgba(0, 68, 203, 0.3)";
      textColor = "rgba(255, 255, 255, 0.3)";
    } else {
      backgroundColor = "rgba(26, 38, 51, 0.3)";
      border = "1px solid #0044CB";
      textColor = "white";
    }
  } else if (buttonType === "secondary") {
    if (props.disabled) {
      backgroundColor = "rgba(64, 64, 64, 0.3)";
      textColor = "rgba(230, 230, 230, 0.3)";
    } else {
      backgroundColor = "#404040";
      textColor = "#b3b3b3";
    }
  }

  if (size === "small") {
    height = "24px";
    padding = "4px 8px";
  } else {
    height = "32px";
    padding = "8px 12px";
  }

  const classes = useStyles({
    backgroundColor,
    textColor,
    width,
    height,
    padding,
    border,
  });

  return (
    <ButtonStyled
      classes={{ root: classes.root }}
      onClick={onClick}
      {...props}
      style={{ textTransform: "none" }}
    >
      {props.children}
    </ButtonStyled>
  );
}
