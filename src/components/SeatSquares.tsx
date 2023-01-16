import clsx from "clsx";
type Input = {
  square: "Available" | "Reserved" | "Selected";
};
export function SeatSquares({ square }: Input) {
  return (
    <div
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
    ></div>
  );
}
