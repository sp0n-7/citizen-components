import React, {useState} from "react";
import { Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import Checkbox  from "./Checkbox";
import {CheckboxProps} from "@material-ui/core/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked)
  }

  return (
    <Checkbox onChange={onChange} checked={checked} {...args}/>
  )
}

export const Active = Template.bind({})
