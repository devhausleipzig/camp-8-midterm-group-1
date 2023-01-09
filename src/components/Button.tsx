import React from "react";

interface ButtonProps {
  primary: boolean;
  secondary: boolean;
  tertiary: boolean;

  backgroundColor?: string;

  label: string;

  onClick?: () => void;
}

export const Button = ({
  primary = true,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        !primary && "bg-white border-pink-600 text-pink-600 hover:bg-gray-100"
      } rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const ButtonActive = ({
  secondary = true,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${
        !secondary && "bg-white border-pink-600 text-pink-600 hover:bg-gray-100"
      } rounded-md border-2 border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
