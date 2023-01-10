import React, { useState } from "react";

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  label: string;
  size: "large";
  onClick?: () => void;
};

export const ButtonActive = ({
  primary = false,
  backgroundColor: label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};

type Input = {
  type: string;
};
export function Button({ type }: Input) {
  return (
    <div className="flex items-center">
      <button className="rounded-md border-2 border-solid shadow-sm px-4 py-2 font-medium text-slate-700">
        ButtonText
      </button>

      {/* <button
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
      </button> */}
    </div>
  );
}
