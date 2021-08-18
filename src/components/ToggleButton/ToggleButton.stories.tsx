import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import ToggleButton from "./ToggleButton";
import {Story} from "@storybook/react";
import {ToggleButtonProps} from "./ToggleButton";

export default {
    title: "Components/ToggleButton",
    component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => <ToggleButton {...args} />

export const Primary = Template.bind({})
Primary.args = { label: "Primary", disabled: false, on: true }
