import Navigationsbar from "../layouts/NavigationsBar";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";
type NewType = ComponentMeta<typeof Navigationsbar>;

export default {
  title: "Example/NavBar",
  component: Navigationsbar,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof Navigationsbar> = (args) => (
  <Navigationsbar />
);

export const Horizontal = Template.bind({});
Horizontal.args = {};
