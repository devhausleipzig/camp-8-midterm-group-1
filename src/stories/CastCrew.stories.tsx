import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CastCrew } from "../components/CastCrew";
import "../index.css";

type NewType = Meta<typeof CastCrew>;

export default {
  title: "Example/CastCrew",
  component: CastCrew,
  argTypes: {
    input: {
      options: ["Cast", "Crew"],
      control: { type: "radio" },
    },
  },
} as NewType;

const Template: StoryFn<typeof CastCrew> = (args) => <CastCrew {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  input: "Cast",
};
