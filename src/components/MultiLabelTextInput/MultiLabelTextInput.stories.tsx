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
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any>([
    { number: 5, key: "NYC Citywide" },
    { number: 11, key: "Manhattan" },
    // { number: 7, key: "Bronx" },
  ]);

  const handleInputChange = (val: string) => {
    setInputValue(val);
  };
  return (
    <>
      <div style={{ width: "332px" }}>
        <MultiLabelTextInput
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          onClear={() => {
            setOptions([]);
          }}
          options={options}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          getOptionSelected={(option: any, value: any) => {
            return option.key === value.key;
          }}
          onDeleteOption={(option: any) => {
            const indexToRemove = options.findIndex(
              (opt: any) => opt.key === option.key
            );
            const newOpts = [...options];
            newOpts.splice(indexToRemove, 1);

            setOptions([...newOpts]);
          }}
          chipLabel={(option: any) => (
            <div style={{ display: "flex" }}>
              {option.key}
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
          inputLabel={`Coverage Selection (${options.length})`}
        />
      </div>
      <div
        style={{
          color: "red",
          width: "100px",
          height: "20px",
          marginTop: "50px",
        }}
      >
        {`Open: ${open}`}
      </div>
    </>
  );
};

export const CustomLabels = Template.bind({});
CustomLabels.args = {};
