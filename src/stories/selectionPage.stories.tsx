import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { selectionPage } from "../components/selectionPage";

type NewType = Meta<typeof selectionPage>;

export default {
  title: "Example/selectionPage",
  component: selectionPage,
  argTypes: {
    type: {
      options: ["Selected", "Available", "Taken"],
      control: { type: "radio" },
    },
  },
};
const Template: StoryFn<typeof selectionPage> = (args) => <selectionPage />;

export const Selection = Template.bind({});
Selection.args = {
  type: "Normal",
};
