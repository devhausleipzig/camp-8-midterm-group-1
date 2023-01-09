import React from "react";
import { APIImplement } from "../components/API";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";

type NewType = ComponentMeta<typeof APIImplement>;

export default {
  title: "Example/API",
  component: APIImplement,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof APIImplement> = (args) => (
  <APIImplement />
);

export const Horizontal = Template.bind({});
Horizontal.args = {};
