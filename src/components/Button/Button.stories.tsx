import React from "react";
import { Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import Button, { StyledButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<StyledButtonProps> = (args) => {
  return (
    <Button {...args}>
      {args.children}
    </Button>
  )
}

export const Active = Template.bind({})
Active.args = { buttonType: 'active', children: 'Active' }

export const Submit = Template.bind({})
Submit.args = { buttonType: 'submit', children: 'Submit' }

export const Warning = Template.bind({})
Warning.args = { buttonType: 'warning', children: 'Warning' }

export const Secondary = Template.bind({})
Secondary.args = { buttonType: 'secondary', children: 'Secondary' }
