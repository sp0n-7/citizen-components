// @ts-nocheck
import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SelectInputProps } from "./Select";
import Select from "./Select";
import { SelectChangeEvent } from "@mui/material";

export default {
  title: "Components/Select",
  component: Select
} as Meta;

const Template: Story<SelectInputProps> = args => {
  const [value, setValue] = React.useState<any>("");

  const handleChange = (
    event: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value as any);
  };

  return (
    <div style={{ width: "300px" }}>
      <Select
        onChange={(
          e: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
        ) => handleChange(e)}
        value={value}
        {...args}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: "None", value: "" },
    { label: "Milk", value: "Milk" },
    { label: "Orange Juice", value: "Tree" }
  ]
};
