import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

export enum SelectButtonVariant {
  primary = "unselected",
  secondary = "selected",
  tertiary = "disabled",
}

interface SelectButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  variant: SelectButtonVariant;
  type: "submit" | "button";
}

export function SelectButton({
  type = "submit",
  label,
  variant,
  ...props
}: SelectButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        type="button"
        className={clsx(
          "text-center rounded-md w-16 h-7",
          variant == SelectButtonVariant.primary
            ? "text-description bg-dark text-white-dimmed"
            : "",

          variant == SelectButtonVariant.secondary
            ? "text-description bg-yellow text-dark-light"
            : "",
          variant == SelectButtonVariant.tertiary
            ? "disabled:curser-not-allowed text-description bg-dark text-white-dimmed-heavy "
            : ""
        )}
        {...props}
      >
        {label}
      </button>
    </div>
  );
}
