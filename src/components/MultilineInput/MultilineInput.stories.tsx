import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MultilineInput from "./MultilineInput";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

export default {
  title: "Components/Inputs/MultilineInput",
  component: MultilineInput
} as Meta;

const Template: Story<OutlinedInputProps> = args => {
  const [val, setVal] = useState("this is the original value");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setVal(e.target.value);
  };

  return (
    <div style={{ width: "300px" }}>
      <MultilineInput {...args} multiline onChange={onChange} value={val} />
      <p>{val}</p>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = { placeholder: "Update...", rows: 3, disabled: false };

export const Edited = Template.bind({});
Edited.args = {
  placeholder: "Update...",
  rows: 3,
  disabled: false
};
