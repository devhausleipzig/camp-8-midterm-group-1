import React from "react";
import { Emogi } from "../components/Emogi";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";

type NewType = ComponentMeta<typeof Emogi>;

export default {
  title: "Example/Emogi",
  component: Emogi,
  argTypes: {},
} as NewType;

const Template: ComponentStory<typeof Emogi> = (args) => <Emogi />;

export const Generic = Template.bind({});
Generic.args = {};
