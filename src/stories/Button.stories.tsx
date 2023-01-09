import React, { useState } from "react";
import "../index.css";

// import { Button } from "../components/Button";

export default {
  title: "example/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export function Button() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className="rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-yellow-400
          text-base font-medium text-slate-700"
        data-ripple-light="true"
        onClick={() => setIsButtonClicked(!isButtonClicked)}
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
