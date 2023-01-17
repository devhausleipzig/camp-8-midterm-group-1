import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { SelectButton } from "../components/SelectButton";
import clsx from "clsx";

type NewType = Meta<typeof SelectButton>;

export default {
  title: "Example/BookingLabel",

  component: SelectButton,

  argTypes: {
    BookingLabel: {
      control: { type: "radio" },
      variant: ["selected", "disabled"],
    },
  },
};

const Template: StoryFn<typeof SelectButton> = (args) => (
  <SelectButton {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "",
  variant: "selected",
};
