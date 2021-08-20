import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import SelectInput, {SelectInputProps} from "./SelectInput";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
} as Meta;

const Template: Story<SelectInputProps> = (args) => {
  return (
    <SelectInput {...args}/>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {label: "None", value: ""},
    {label: "Milk", value: "Milk"},
    {label: "Orange Juice", value: "Tree"}
  ]
};
