import clsx from "clsx";
import React, { useState } from "react";

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  size: "large";
};

type Input = {
  type: string;
  label: string;
  setFunction: React.Dispatch<React.SetStateAction<string>>;
};
export function Button({ type, label, setFunction }: Input) {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setFunction("clicked")}
        type="button"
        className={clsx(
          "text-center text-primary rounded-lg w-80 h-10 ",
          type === "Normal" ? "bg-yellow text-dark-light" : "",
          type === "Active" ? "bg-yellow bg-opacity-50 text-dark-light" : "",
          type === "Disabled" ? "bg-dark-light text-white" : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
