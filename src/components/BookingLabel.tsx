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
export function BookingLabel({ type, label }: Input) {
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className={clsx(
          "text-center text-primary rounded-sm w-20 h-7 ",
          type === "Selected" ? "bg-yellow text-dark-light" : "",
          type === "Available" ? " text-white opacity-50" : "",
          type === "Taken" ? "text-body text-dark-light opacity-50" : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
