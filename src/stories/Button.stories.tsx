import React, { useState } from "react";
import "../index.css";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components/Button";

type NewType = Meta<typeof Button>;

export default {
  title: "Example/Button",
  component: Button,
};
const Template: StoryFn<typeof Button> = (args) => <Button />;

export const Basic = Template.bind({});
