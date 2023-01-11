import clsx from "clsx";
import { useState } from "react";

export default function Moviespagebutton() {
  const [button, setButton] = useState<number>(0);
  function Movies(Number: number) {
    return (
      <div className="w-[72px] h-[124px] flex flex-col items-center justify-center gap-[1.25rem] bg-dark">
        <button
          className={clsx(
            "w-[32px] h-[32px] rounded-sm text-dark",

            button == Number ? " bg-yellow" : " bg-white-dimmed"
          )}
          onClick={() => {
            setButton(Number);
            console.log("clicked", Number, button);
          }}
        >
          {String(Number + 1)}
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="flex gap-4">
        {Movies(0)}
        {Movies(1)}
        {Movies(2)}
        {Movies(3)}
        {Movies(4)}
      </div>
    </>
  );
}
