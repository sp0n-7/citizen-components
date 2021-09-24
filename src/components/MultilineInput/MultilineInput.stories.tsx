import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MultilineInput, { MultilineInputProps } from "./MultilineInput";

export default {
  title: "Components/Inputs/MultilineInput",
  component: MultilineInput,
} as Meta;

const Template: Story<MultilineInputProps> = (args) => {
  const [val, setVal] = useState("");
  const [edited, setEdited] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setVal(e.target.value);
    setEdited(true);
  };

  return (
    <div style={{ width: "200px" }}>
      <MultilineInput
        {...args}
        multiline
        onChange={onChange}
        value={val}
        edited={edited}
      />
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
  disabled: false,
  edited: false,
};
