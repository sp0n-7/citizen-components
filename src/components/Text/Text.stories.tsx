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

export const PrimarySmallSemibold = Template.bind({});
PrimarySmallSemibold.args = {
  size: "small",
  color: "primary",
  children: "Hey this is some text",
  weight: "normal",
  align: "inherit",
};
