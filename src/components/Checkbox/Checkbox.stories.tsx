import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {Checkbox, CheckboxProps} from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <div style={{width: "100%"}}>
      <Checkbox active={checked} handleClick={() => setChecked(!checked)} color={args.color}/>
    </div>
  );
};

export const Primary = Template.bind({});
