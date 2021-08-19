import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MultilineInput from "./MultilineInput";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

export default {
  title: "Components/Inputs/MultilineInput",
  component: MultilineInput,
} as Meta;

const Template: Story<OutlinedInputProps> = (args) => {
  const [val, setVal] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setVal(e.target.value);
  };

  return (
    <>
      <MultilineInput {...args} onChange={onChange} />
      <p>{val}</p>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = { placeholder: "Update...", multiline: true, rows: 3 };
