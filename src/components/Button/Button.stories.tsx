import React from "react";
import { Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import Button, { StyledButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: {control:"color"}
  },
} as Meta;

const Template: Story<StyledButtonProps> = (args) => {
  return (
    <Button {...args}>
      {args.children}
    </Button>
  )
}

export const Active = Template.bind({})
Active.args = { type: 'active', children: 'Active' }

export const Submit = Template.bind({})
Submit.args = { type: 'submit', children: 'Submit' }

export const Warning = Template.bind({})
Warning.args = { type: 'warning', children: 'Warning' }

export const Secondary = Template.bind({})
Secondary.args = { type: 'secondary', children: 'Secondary' }
