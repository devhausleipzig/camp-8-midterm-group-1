import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface SeatProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selected: boolean;
  available: boolean;
  id: string;
}
export function Seat({ id, selected, available, ...props }: SeatProps) {
  return (
    <button
      disabled={!available}
      className={clsx(
        "w-7 aspect-square rounded-md",
        selected ? "bg-yellow" : available ? "bg-dark-light" : "bg-white"
      )}
      {...props}
    ></button>
  );
}
