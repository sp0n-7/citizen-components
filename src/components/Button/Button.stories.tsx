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
      Archive Incident
    </Button>
  )
}
export const Primary = Template.bind({})
Primary.args = { backgroundColor: "#331C1F", textColor: "#CC858D" }
