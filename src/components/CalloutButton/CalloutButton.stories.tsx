import React from "react";
import { Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react"
import CalloutButton , { StyledButtonProps } from "./CalloutButton";

export default {
  title: "Components/CalloutButton",
  component: CalloutButton,
} as Meta;

const Template: Story<StyledButtonProps> = (args) => {
  return (
    <CalloutButton {...args}>
      {args.children}
    </CalloutButton>
  )
}

export const Primary = Template.bind({})
Primary.args = { children: '4x' }
