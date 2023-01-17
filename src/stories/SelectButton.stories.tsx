import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { SelectButton, SelectButtonVariant } from "../components/SelectButton";
import clsx from "clsx";

type NewType = Meta<typeof SelectButton>;

export default {
  title: "Example/SelectButton",

  component: SelectButton,

  argTypes: {
    BookingLabel: {
      control: { type: "radio" },
      variant: ["selected", "unselected", "default"],
    },
  },
};

const Template: StoryFn<typeof SelectButton> = (args) => (
  <SelectButton {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "date/time",
  variant: SelectButtonVariant.tertiary,
};
