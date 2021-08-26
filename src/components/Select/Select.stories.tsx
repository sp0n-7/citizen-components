import React, {ChangeEvent} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {SelectInputProps} from "./Select";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: Story<SelectInputProps> = (args) => {
  const [value, setValue] = React.useState<any>('');

  const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    setValue(event.target.value as any);
  };

  return (
    <Select onChange={handleChange} value={value} {...args}/>
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
