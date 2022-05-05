import React from "react";
import { ButtonProps } from "@mui/material/Button";
import style from "./CalloutButton.module.css";

export interface StyledButtonProps extends ButtonProps {
  primary?: boolean;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function CalloutButton({
  onClick,
  label,
  ...props
}: StyledButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      style={{ textTransform: "none" }}
      className={style.label}
    >
      {label || props.children}
    </button>
  );
}
