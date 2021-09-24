import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TextInput from "./TextInput";

import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

export default {
  title: "Components/Inputs/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<OutlinedInputProps> = (args) => {
  const [val, setVal] = useState("hey this is a value");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setVal(e.target.value);
  };

  return (
    <>
      <TextInput {...args} onChange={onChange} value={val} />
    </>
  );
};

export const Notched = Template.bind({});
Notched.args = {
  notched: true,
  label: "This is a label",
  placeholder: "Hey this is an input",
};

export const NoNotch = Template.bind({});
NoNotch.args = { placeholder: "Hey this is an input" };

export const NotchedDisabled = Template.bind({});
NotchedDisabled.args = {
  notched: true,
  label: "This is a label",
  placeholder: "Hey this is a placeholder",
  disabled: true,
};
