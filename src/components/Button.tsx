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
};
export function Button({ type, label }: Input) {
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className={clsx(
          "text-center text-primary rounded-lg w-80 h-10 ",
          type === "Active" ? "bg-yellow text-dark-light" : "",
          type === "Inactive" ? "bg-yellow bg-opacity-50 text-dark-light" : "",
          type === "Dark" ? "bg-dark-light text-white" : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
