import React from "react";
import "../index.css";
import { StoryObj, Meta } from "@storybook/react";
import { UserInfo } from "../components/UserInfo";

const meta = {
  title: "UserInfo",
  component: UserInfo,
  argTypes: {
    name: {
      control: "text",
    },
  },
} as Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const FirstStory: Story = {
  args: {
    name: "Dan",
    image: "https://i.stack.imgur.com/34AD2.jpg",
  },
};
