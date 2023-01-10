import clsx from "clsx";
import React, { useState } from "react";

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  label: string;
  size: "large";
};

type Input = {
  type: string;
};
export function Button({ type }: Input) {
  return (
    <div className="bg-background">
      <button
        type="button"
        className={clsx(
          "text-center rounded-lg w-full text-primary",
          type === "Normal" ? "bg-yellow text-dark-light" : "",
          type === "Active" ? "bg-yellow bg-opacity-50 text-dark-light" : "",
          type === "Disabled" ? "bg-dark-light text-white" : ""
        )}
      >
        text
      </button>
    </div>
  );
}
