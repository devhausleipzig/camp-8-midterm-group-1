import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface SeatProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selected: boolean;
  reserved: boolean;
  id: string;
}
export function Seat({ id, selected, reserved, ...props }: SeatProps) {
  return (
    <button
      disabled={reserved}
      className={clsx(
        "w-7 aspect-square rounded-md",
        selected ? "bg-yellow" : !reserved ? "bg-dark-light" : "bg-white"
      )}
      {...props}
    ></button>
  );
}
