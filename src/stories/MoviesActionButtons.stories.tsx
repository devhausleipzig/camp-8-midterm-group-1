import MoviesActionButton from "../layouts/MoviesActionButton";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";
type NewType = ComponentMeta<typeof MoviesActionButton>;

export default {
  title: "Example/ActionButton",
  component: MoviesActionButton,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof MoviesActionButton> = (args) => (
  <MoviesActionButton />
);

export const Horizontal = Template.bind({});
Horizontal.args = {};
