import clsx from "clsx";
import { PropsWithChildren, useState } from "react";

type InputProps = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
} & PropsWithChildren;
export function CastCrewButtons({ input, setInput }: InputProps) {
  const active = "text-white border-white bg-white-dimmed";
  const inactive = "text-white-dimmed bg-dark-light border-dark-light";
  return (
    <div className="flex justify-between sticky top-0 bg-dark z-10">
      <button
        className={clsx(
          "w-40 h-6 text-body border-2 rounded-md flex justify-center items-center",
          input == "cast" ? active : inactive
        )}
        onClick={() => setInput("cast")}
      >
        Cast
      </button>
      <button
        className={clsx(
          "w-40 h-6 text-body border-2 rounded-md flex justify-center items-center",
          input == "crew" ? active : inactive
        )}
        onClick={() => setInput("crew")}
      >
        Crew
      </button>
    </div>
  );
}
