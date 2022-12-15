import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "@example/core";

export default {
  component: Button,
  argTypes: {
    label: {
      defaultValue: "Example button",
      control: "text",
    },
  },
} as Meta<typeof Button>;

export const Basic = (args) => <Button {...args} />;
