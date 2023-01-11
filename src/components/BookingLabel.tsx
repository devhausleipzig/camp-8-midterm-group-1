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
          type === "Available" ? "bg-yellow bg-opacity-50 text-dark-light" : "",
          type === "Taken" ? "bg-dark-light text-white" : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
