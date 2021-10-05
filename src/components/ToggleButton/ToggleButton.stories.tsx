import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import ToggleButton from "./ToggleButton";
import { Story } from "@storybook/react";
import { ToggleButtonProps } from "./ToggleButton";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => {
  const [on, setOn] = useState(false);
  const onChange = () => {
    setOn(!on);
  };
  return <ToggleButton {...args} on={on} onClick={onChange} />;
};

export const Primary = Template.bind({});
Primary.args = { label: "Primary", disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", disabled: true };

export const NavBar = Template.bind({});
NavBar.args = { label: "NavBar", disabled: false, navBar: true };
