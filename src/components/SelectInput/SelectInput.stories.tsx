import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import SelectInput from "./SelectInput";
import {SelectProps} from "@material-ui/core/Select";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  return (
    <SelectInput options={[
      {label: "None", value: ""},
      {label: "Milk", value: "Cow"},
      {label: "OrangeJuice", value: "Tree"},
    ]} {...args}/>
  );
}

export const Primary = Template.bind({});
Primary.args = {};
