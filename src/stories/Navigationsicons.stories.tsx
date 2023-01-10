import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";
import Navigationsicons from "../layouts/Navigationsicons";
type NewType = ComponentMeta<typeof Navigationsicons>;

export default {
  title: "Example/NavBar",
  component: Navigationsicons,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof Navigationsicons> = (args) => (
  <Navigationsicons />
);

export const Horizontal = Template.bind({});
Horizontal.args = {};
