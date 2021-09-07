import React from "react"
import classnames from "classnames"

import style from "./Checkbox.module.css"
export interface CheckboxProps {
  active: boolean
  handleClick: React.MouseEventHandler<HTMLDivElement>
  color: string
}

export const Checkbox = ({ active, handleClick, color="black" }: CheckboxProps) => {
  return (
    <div
      className={classnames(style.box, {
        [style.active]: active,
      })}
      onClick={handleClick}
    >
      {active &&
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4.69231L5.2 9L13 1" stroke={color} stroke-width="3"/>
        </svg>
      }
    </div>
  )
}

export default Checkbox
