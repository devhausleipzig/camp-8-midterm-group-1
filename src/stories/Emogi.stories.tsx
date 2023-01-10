import React from "react";
import { Emogi } from "../components/Emogi";
import { Meta, StoryFn } from "@storybook/react";
import "../index.css";

type NewType = Meta<typeof Emogi>;

export default {
  title: "Example/Emogi",
  component: Emogi,
  argTypes: {},
} as NewType;

const Template: StoryFn<typeof Emogi> = (args) => <Emogi {...args} />;

export const Generic = Template.bind({});

Generic.args = {
  emojiName: "Adventure",
};
