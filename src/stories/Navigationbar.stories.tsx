import Navigationbar from "../Layout/Navigationbar";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";
type NewType = ComponentMeta<typeof Navigationbar>;

export default {
  title: "Example/NavBar",
  component: Navigationbar,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof Navigationbar> = (args) => (
  <Navigationbar />
);

export const Horizontal = Template.bind({});
Horizontal.args = {};
