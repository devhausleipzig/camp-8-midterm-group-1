import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

export enum SelectButtonVariant {
  available = "unselected",
  selected = "selected",
  reserved = "disabled",
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
  type,
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
          variant == SelectButtonVariant.available
            ? "text-description text-white-dimmed"
            : "",

          variant == SelectButtonVariant.selected
            ? "text-description bg-yellow text-dark-light"
            : "",
          variant == SelectButtonVariant.reserved
            ? "disabled:curser-not-allowed text-description text-white-dimmed-heavy "
            : ""
        )}
        {...props}
      >
        {label}
      </button>
    </div>
  );
}
