import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useState,
} from "react";

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  variant: ButtonVariant;
  type?: "submit" | "button";
}

export function Button({
  type = "button",
  label,
  variant,
  ...props
}: ButtonProps) {
  return (
    <div className="flex justify-center items-center">
      <button
        className={clsx(
          "text-center text-primary rounded-lg w-full h-10 disabled:opacity-50 disabled:cursor-not-allowed",
          variant == ButtonVariant.primary
            ? "bg-yellow text-dark-light"
            : variant == ButtonVariant.secondary
            ? "bg-dark-light bg-opacity-50 text-white"
            : ""
        )}
        {...props}
      >
        {label}
      </button>
    </div>
  );
}
