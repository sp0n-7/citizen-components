import React from "react";
import MaterialButton from '@material-ui/core/Button';
import {ButtonProps} from "@material-ui/core/Button";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { ButtonStyle, PropColors } from "./Button.styles"

const ButtonStyled = withStyles(ButtonStyle)(MaterialButton);

export interface StyledButtonProps extends ButtonProps {
  primary?: boolean;
  buttonType?: 'submit' | 'warning' | 'active' | 'secondary';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const useStyles = makeStyles(PropColors);

export default function Button({ buttonType, onClick, ...props }: StyledButtonProps) {
  let backgroundColor
  let textColor

  if (buttonType === 'submit') {
    backgroundColor = '#4DA6FF'
    textColor = 'white'
  } else if (buttonType === 'warning') {
    backgroundColor = '#331C1F'
    textColor = '#CC858D'
  } else if (buttonType === 'active') {
    backgroundColor = '#1A2633'
    textColor = 'white'
  } else if (buttonType === 'secondary') {
    backgroundColor = '#666666'
    textColor = 'white'
  }

  const classes = useStyles({backgroundColor, textColor});

  return (
    <ButtonStyled className={ `${classes.colors}` } {...props} style={{textTransform: 'none'}}>
      {props.children}
    </ButtonStyled>
  );
};
