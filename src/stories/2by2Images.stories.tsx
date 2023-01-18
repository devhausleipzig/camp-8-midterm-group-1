import React from "react";
import { Movies } from "../routes/Movies";
import { Meta, StoryFn } from "@storybook/react";
import "../index.css";

type NewType = Meta<typeof Movies>;

export default {
  title: "Example/2by2",
  component: Movies,
  argTypes: {},
} as NewType;

const Template: StoryFn<typeof Movies> = (args) => <Movies />;

export const Horizontal = Template.bind({});
Horizontal.args = {};
