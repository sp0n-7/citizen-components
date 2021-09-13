import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import MultiLabelTextInput from "./MultiLabelTextInput";

export default {
  title: "Components/Inputs/MultiLabelTextInput",
  component: MultiLabelTextInput,
} as Meta;

const Template: Story<any> = (args) => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<any>([
    { number: 12, subArea: "Manhattan" },
    { number: 25, subArea: "Brooklyn" },
    { number: 7, subArea: "Bronx" },
  ]);

  const handleInputChange = (val: string) => {
    setInputValue(val);
  };
  return (
    <div style={{ width: "332px" }}>
      <MultiLabelTextInput
        options={options}
        handleChange={() => {}}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        getOptionSelected={(option: any, value: any) => {
          return option.subArea === value.subArea;
        }}
        onDeleteOption={(option: any) => {
          const indexToRemove = options.findIndex(
            (opt: any) => opt.subArea === option.subArea
          );
          const newOpts = [...options];
          newOpts.splice(indexToRemove, 1);

          setOptions([...newOpts]);
        }}
        chipLabel={(option: any) => (
          <div style={{ display: "flex" }}>
            {option.subArea}
            <div
              style={{
                color: "#4da6ff",
                paddingLeft: "4px",
              }}
            >
              ({option.number})
            </div>
          </div>
        )}
        inputLabel="Coverage Selection"
      />
    </div>
  );
};

export const CustomLabels = Template.bind({});
