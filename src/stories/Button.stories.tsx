import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";

// import { Button } from "../components/Button";

export default {
  title: "example/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "ButtonNormal",
//   backgroundColor: "",
// };

export function Button() {
  return (
    <div className="flex items-center">
      <button
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-yellow-400
          text-base font-medium text-slate-700"
        data-ripple-light="true"
      >
        ButtonNormal
      </button>
      <button
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-yellow-400 opacity-40
          text-base font-medium text-slate-700"
        data-ripple-light="true"
      >
        ButtonActive
      </button>
      <button
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-slate-700
          text-base font-medium text-white"
        data-ripple-dark="true"
      >
        ButtonDisabled
      </button>
    </div>
  );
}

// export const Secondary = Template.bind({});
// Secondary.args = {
//   primary: false,
//   label: "ButtonActive",
//   backgroundColor: "",
// };

// export const Tertiary = Template.bind({});

// Tertiary.args = {
//   label: "ButtonDisabled",
// };
