import React from "react";
import "../index.css";
import { StoryObj, Meta } from "@storybook/react";
import { SearchBar } from "../components/SearchBar";

//👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
