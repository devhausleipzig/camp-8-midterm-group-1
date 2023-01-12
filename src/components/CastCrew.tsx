import clsx from "clsx";
import { useState } from "react";

type input = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};
export function CastCrew({ input, setInput }: input) {
  const active = "text-white border-white bg-white-dimmed";
  const inactive = "text-white-dimmed bg-dark-light border-dark-light";
  return (
    <div className="flex justify-between">
      <p
        className={clsx(
          "w-40 h-6 text-body border-2 rounded-md flex justify-center items-center",
          input == "cast" ? active : inactive
        )}
        onClick={() => setInput("cast")}
      >
        Cast
      </p>
      <p
        className={clsx(
          "w-40 h-6 text-body border-2 rounded-md flex justify-center items-center",
          input == "crew" ? active : inactive
        )}
        onClick={() => setInput("crew")}
      >
        Crew
      </p>
    </div>
  );
}