import React from "react";
import MaterialButton from '@material-ui/core/Button';
import {ButtonProps} from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import { CalloutButtonStyle } from "./CalloutButton.styles"

const ButtonStyled = withStyles(CalloutButtonStyle)(MaterialButton);

export interface StyledButtonProps extends ButtonProps {
  primary?: boolean;
  label?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function CalloutButton({ onClick, label, ...props }: StyledButtonProps) {
  return (
    <ButtonStyled onClick={onClick} {...props} style={{textTransform: 'none'}} disableRipple >
      {label || props.children}
      {/*{props.children}*/}
    </ButtonStyled>
  );
}

