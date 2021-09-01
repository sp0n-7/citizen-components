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
    <Text size={args.size} color={args.color} weight={args.weight}>
      {args.children}
    </Text>
  );
};

export const PrimarySmallSemibold = Template.bind({});
PrimarySmallSemibold.args = {
  size: "small",
  color: "primary",
  children: "Hey this is some text",
  weight: "normal",
};
