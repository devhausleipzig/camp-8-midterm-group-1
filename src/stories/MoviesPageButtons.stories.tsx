import Moviespagebutton from "../layouts/MoviesPageButton";
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";
type NewType = ComponentMeta<typeof Moviespagebutton>;

export default {
  title: "Example/Pagebutton",
  component: Moviespagebutton,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof Moviespagebutton> = (args) => (
  <Moviespagebutton />
);

export const vertical = Template.bind({});
vertical.args = {};
