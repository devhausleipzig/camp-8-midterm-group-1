import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
type Options = "Available" | "Reserved" | "Selected";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  square: Options;
  setSquare: React.Dispatch<React.SetStateAction<Options>>;
}
export function SeatSquares({ square, setSquare, ...props }: ButtonProps) {
  function clickFunction() {
    if (square === "Available") {
      setSquare("Selected");
    }
    if (square === "Selected") {
      setSquare("Available");
    }
  }
  return (
    <button
      disabled={square === "Reserved" ? true : false}
      className={clsx(
        "flex gap-2 ",
        square === "Available"
          ? " w-7 h-7 bg- bg-dark-light rounded-sm justify-center items-center"
          : "",
        square === "Reserved"
          ? "flex-none w-7 h-7 bg-white rounded-sm justify-center items-center"
          : "",
        square === "Selected"
          ? "flex-none w-7 h-7 bg-yellow rounded-sm justify-center items-center"
          : ""
      )}
      onClick={clickFunction}
    ></button>
  );
}
