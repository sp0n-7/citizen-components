import React from "react"
import classnames from "classnames"

import style from "./Checkbox.module.css"
export interface CheckboxProps {
  active: boolean
  handleClick: React.MouseEventHandler<HTMLDivElement>
}

export const Checkbox = ({ active, handleClick }: CheckboxProps) => {
  return (
    <div
      className={classnames(style.box, {
        [style.active]: active,
      })}
      onClick={handleClick}
    >
      {active && <img src='./CheckBox.svg' />}
    </div>
  )
}

export default Checkbox
