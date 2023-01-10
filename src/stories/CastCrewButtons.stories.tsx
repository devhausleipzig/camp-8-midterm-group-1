import React from "react";
import "../index.css";
import { StoryObj, Meta } from "@storybook/react";
import { CastCrewButtons } from "../components/CastCrewButtons";



const meta = {
  
  title: "CastCrewButtons",
  component: CastCrewButtons,
//   argTypes: {
//     name: {
//         control: "text"
//     },
//   },
} as Meta<typeof CastCrewButtons>;

export default meta;
type Story = StoryObj<typeof CastCrewButtons>;

export const FirstStory: Story = {
  args: {
//    name: "Dan",
//    image:
//    "https://i.stack.imgur.com/34AD2.jpg",
  },
};