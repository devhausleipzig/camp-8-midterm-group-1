import React from "react";

type ButtonProps = {
  primary: boolean;
  backgroundColor: string;
  label: string;
  size: "large";
  onClick?: () => void;
};

export const ButtonActive = ({
  primary = false,
  backgroundColor: label,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
};
