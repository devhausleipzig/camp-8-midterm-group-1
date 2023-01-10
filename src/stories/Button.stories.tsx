import React, { useState } from "react";
import "../index.css";
import { Button } from "../components/Button";


export default: {
 title: "Button",
  component: Button,

  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'button' },
    },
};



 function () {
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
        onClick={() => setIsButtonClicked(!isButtonClicked)}
      >
        ButtonActive
      </button>
    
    </div>
  );
};






