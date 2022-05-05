import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import NumberInput from "./NumberInput";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

export default {
  title: "Components/Inputs/NumberInput",
  component: NumberInput
} as Meta;

const Template: Story<OutlinedInputProps> = args => {
  const [val, setVal] = useState("1");

  const onChangeUp = () => {
    setVal((parseInt(val) + 1).toString());
  };

  const onChangeDown = () => {
    setVal((parseInt(val) - 1).toString());
  };

  return (
    <div style={{ width: "72px" }}>
      <NumberInput
        {...args}
        value={val}
        onChangeUp={onChangeUp}
        onChangeDown={onChangeDown}
      />
    </div>
  );
};

export const Notched = Template.bind({});
Notched.args = {
  notched: true,
  label: "Safety",
  placeholder: "1"
};
