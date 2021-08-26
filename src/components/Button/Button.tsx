import React from "react";
import MaterialButton from '@material-ui/core/Button';
import {ButtonProps} from "@material-ui/core/Button";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { ButtonStyle, PropColors } from "./Button.styles"

const ButtonStyled = withStyles(ButtonStyle)(MaterialButton);

export interface StyledButtonProps extends ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  textColor?: string;
  type?: 'submit' | 'warning' | 'active' | 'secondary';
  fontWeight?: number;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const useStyles = makeStyles(PropColors);

export default function Button({ backgroundColor, textColor, type,
                        onClick, fontWeight=700, ...props }: StyledButtonProps) {
  if (type === 'submit') {
    backgroundColor = '#4DA6FF'
    textColor = 'white'
  } else if (type === 'warning') {
    backgroundColor = '#331C1F'
    textColor = '#CC858D'
  } else if (type === 'active') {
    backgroundColor = '#1A2633'
    textColor = 'white'
  } else if (type === 'secondary') {
    backgroundColor = '#666666'
    textColor = 'white'
  }

  const classes = useStyles({backgroundColor, textColor, fontWeight});

  return (
    <ButtonStyled className={ `${classes.colors}` } {...props} style={{textTransform: 'none'}}>
      {props.children}
    </ButtonStyled>
  );
};
