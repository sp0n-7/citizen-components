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
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const useStyles = makeStyles(PropColors);

export default function Button({ backgroundColor, textColor,
                        onClick, ...props }: StyledButtonProps) {
  const classes = useStyles({backgroundColor, textColor});

  return (
    <ButtonStyled className={ `${classes.colors}` } {...props} style={{textTransform: 'none'}}>
      {props.children}
    </ButtonStyled>
  );
};
