import clsx from "clsx";
import { useState } from "react";

export default function Moviespagebutton() {
  const [button, setButton] = useState(0);
  return (
    <>
      <div className="w-[72px] h-[124px] flex flex-col items-center justify-center gap-[1.25rem] bg-dark">
        <button
          className={clsx(
            "w-[32px] h-[32px] rounded-sm text-dark",

            button == 0 ? " bg-yellow" : " bg-white-dimmed"
          )}
          onClick={() => setButton(0)}
        >
          1
        </button>
        <button
          className={clsx(
            "w-[32px] h-[32px] rounded-sm text-dark",

            button == 1 ? " bg-yellow" : " bg-white-dimmed"
          )}
          onClick={() => setButton(1)}
        >
          1
        </button>
      </div>
    </>
  );
}
