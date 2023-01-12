import clsx from "clsx";
import { useState } from "react";

type Input = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Moviespagebutton({ number, setNumber }: Input) {
  function Movies(Number: number) {
    return (
      <div className="w-[72px] h-[124px] flex items-center justify-center gap-[2.75rem] bg-dark">
        <button
          className={clsx(
            "w-[32px] h-[32px] rounded-sm text-dark",

            number == Number ? " bg-yellow" : " bg-white-dimmed"
          )}
          onClick={() => {
            setNumber(Number);
          }}
        >
          {String(Number + 1)}
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-row justify-center">
        {Movies(0)}
        {Movies(1)}
        {Movies(2)}
        {Movies(3)}
        {Movies(4)}
      </div>
    </>
  );
}
