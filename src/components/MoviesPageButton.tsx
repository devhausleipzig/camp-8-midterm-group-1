import clsx from "clsx";
import { useState } from "react";

type Input = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Moviespagebutton({ number, setNumber }: Input) {
  function Movies(Number: number) {
    return (
      <button
        className={clsx(
          "w-8 h-8 rounded-sm text-dark",

          number == Number ? " bg-yellow" : " bg-white-dimmed"
        )}
        onClick={() => {
          setNumber(Number);
        }}
      >
        {String(Number + 1)}
      </button>
    );
  }
  return (
    <>
      <div className="flex w-screen justify-around">
        {Movies(0)}
        {Movies(1)}
        {Movies(2)}
        {Movies(3)}
        {Movies(4)}
      </div>
    </>
  );
}
