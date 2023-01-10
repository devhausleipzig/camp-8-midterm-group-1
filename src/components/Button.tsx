import React, { useState } from "react";

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

type Input = {
  type: string;
};
export function Button({ type }: Input) {
  if ((type = "Normal")) {
    return (
      <div className="bg-background">
        <button className="text-title">ButtonText</button>
      </div>
    );
  }
}
