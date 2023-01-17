import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

type Input = {
  type: "selected" | "unselected" | "disabled";
  label: string;
};
export function BookingLabel({ type, label }: Input) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-md w-16 h-7 ",
        type === "unselected" ? "text-body text-white-dimmed bg-dark" : "",
        type === "disabled" ? "text-body text-white-dimmed-heavy bg-dark" : "",
        type === "selected" ? " text-body bg-yellow text-dark-light" : ""
      )}
    >
      {label}
    </div>
  );
}
