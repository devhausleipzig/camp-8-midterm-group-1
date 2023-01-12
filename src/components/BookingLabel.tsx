import clsx from "clsx";
import React, { useState } from "react";

type SeatsProps = {
  primary: boolean;
  backgroundColor: string;
  size: "large";
};

type Input = {
  type: "Inactive" | "Dark" | "Active";
  label: string;
};
export function BookingLabel({ type, label }: Input) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-md w-16 h-7 ",
        type === "Inactive" ? "text-body text-white-dimmed bg-dark" : "",
        type === "Dark" ? "text-body text-white-dimmed-heavy bg-dark" : "",
        type === "Active" ? " text-body bg-yellow text-dark-light" : ""
      )}
    >
      {label}
    </div>
  );
}
