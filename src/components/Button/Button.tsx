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

  if (buttonType === "submit") {
    backgroundColor = "#4DA6FF";
    textColor = "white";
  } else if (buttonType === "warning") {
    backgroundColor = "#331C1F";
    textColor = "#CC858D";
  } else if (buttonType === "active") {
    backgroundColor = "#1A2633";
    textColor = "white";
  } else if (buttonType === "secondary") {
    backgroundColor = "#666666";
    textColor = "white";
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
