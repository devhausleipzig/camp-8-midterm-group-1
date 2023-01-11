import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { BookingLabel } from "../components/BookingLabel";

type NewType = Meta<typeof BookingLabel>;

export default {
  title: "Example/Bookinglabel",
  component: BookingLabel,
  argTypes: {
    type: {
      options: ["Selected", "Available", "Taken"],
      control: { type: "radio" },
    },
  },
};
const Template: StoryFn<typeof BookingLabel> = (args) => (
  <BookingLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  type: "Selected",
  label: "Jan 11",
};
