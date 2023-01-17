import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

type Input = {
  variant: "selected" | "disabled";
  label: string;
};
export function SelectButton({ variant, label }: Input) {
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className={clsx(
          "rounded-md w-16 h-7 text-description text-white-dimmed bg-background",
          variant === "selected"
            ? "text-description bg-yellow text-dark-light"
            : variant === "disabled"
            ? "text-description text-white-dimmed-heavy bg-background"
            : ""
        )}
      >
        {label}
      </button>
    </div>
  );
}
