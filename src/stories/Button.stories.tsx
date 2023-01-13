import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components/Button";

type NewType = Meta<typeof Button>;

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["Active", "Inactive", "Dark"],
      control: { type: "radio" },
    },
  },
};
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: "Active",
  label: "Button",
};
