import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

type Input = {
  type: "selected" | "disabled";
  label: string;
};
export function BookingLabel({ type, label }: Input) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-md w-16 h-7 text-description text-white-dimmed bg-background",
        type === "selected"
          ? "text-description bg-yellow text-dark-light"
          : type === "disabled"
          ? "text-description text-white-dimmed-heavy bg-background"
          : ""
      )}
    >
      {label}
    </div>
  );
}
