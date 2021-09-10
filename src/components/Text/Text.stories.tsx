import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Text, { TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => {
  return (
    <div style={{ width: "100%" }}>
      <Text
        size={args.size}
        color={args.color}
        weight={args.weight}
        align={args.align}
      >
        {args.children}
      </Text>
    </div>
  );
};

const Template2: Story<TextProps> = (args) => {
  return (
    <div style={{ width: "100%" }}>
      <Text
        size={args.size}
        color={args.color}
        weight={args.weight}
        align={args.align}
      >
        <Text
          size={args.size}
          color="#FF0000"
          weight={args.weight}
          align={args.align}
          style={{ paddingRight: "8px" }}
        >
          S1
        </Text>
        {args.children}
      </Text>
    </div>
  );
};

export const PrimarySmallSemibold = Template.bind({});
PrimarySmallSemibold.args = {
  size: "small",
  color: "primary",
  children: "Hey this is some text",
  weight: "normal",
  align: "inherit",
};

export const NestedText = Template2.bind({});
NestedText.args = {
  size: "small",
  color: "primary",
  children: "Hey this is some text",
  weight: "normal",
  align: "inherit",
};
