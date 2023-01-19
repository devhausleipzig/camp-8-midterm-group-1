import React from "react";

type Props = { icon: JSX.Element } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ icon, ...props }: Props) {
  return (
    <label className="flex body items-center bg-dark-light py-3 px-5 rounded-md gap-5 border-2 border-transparent focus-within:border-white-dimmed-heavy">
      {React.cloneElement(icon, { className: "w-6 h-6 text-white-dimmed" })}
      <input
        className="bg-dark-light flex-1 placeholder:text-white-dimmed text-white outline-none"
        {...props}
      />
    </label>
  );
}
