import "../index.css";
import { StoryObj, Meta } from "@storybook/react";
import BookingStore from "../components/Bookingstore";

//👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "BookingStories",
  component: BookingStore,
} as Meta<typeof BookingStore>;

export default meta;
type Story = StoryObj<typeof BookingStore>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
