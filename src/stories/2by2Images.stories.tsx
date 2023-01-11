import React from "react";
import { Images } from "../components/2by2Images";
import { Meta, StoryFn } from "@storybook/react";
import "../index.css";

type NewType = Meta<typeof Images>;

export default {
  title: "Example/2by2",
  component: Images,
  argTypes: {
    number: { control: { type: "number" } },
  },
} as NewType;

const Template: StoryFn<typeof Images> = (args) => <Images {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  number: 1,
};
