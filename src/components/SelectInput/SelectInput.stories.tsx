import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SelectInput from "./SelectInput";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
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
      <SelectInput {...args} onChange={onChange} />
      <p>{val}</p>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = { label: "Hey", placeholder: "Hey this is an input" };
