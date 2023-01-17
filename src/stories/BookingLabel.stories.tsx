import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { BookingLabel } from "../components/BookingLabel";
import clsx from "clsx";

type NewType = Meta<typeof BookingLabel>;

export default {
  title: "Example/BookingLabel",

  component: BookingLabel,

  argTypes: {
    BookingLabel: {
      control: { type: "radio" },
      type: ["selected", "disabled"],
    },
  },
};

const Template: StoryFn<typeof BookingLabel> = (args) => (
  <BookingLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  label: "",
  type: "disabled",
};
