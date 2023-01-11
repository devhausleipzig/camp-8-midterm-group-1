import { useEffect, useState } from "react";
import { API, DataResponce } from "./API";
import { Transition } from "@headlessui/react";
import clsx from "clsx";

type Input = {
  number: number;
};

function Print(stuff: DataResponce[]) {
  const ReturnArray1: DataResponce[][] = [[]];
  for (let index = 0; index < 5; index++) {
    for (let j = 0; j < 4; j++) {
      ReturnArray1[index].push(stuff[index * 4 + j]);
    }
    ReturnArray1.push([]);
  }
  return ReturnArray1;
}

export function Images({ number }: Input) {
  const data = new API();
  const [Info, setInfo] = useState<DataResponce[]>([]);
  data.BuildArray(setInfo);

  const toMap = Print(Info);

  let previousvalue = 0;
  return toMap.map((card, index) => {
    let [isShowing, setIsShowing] = useState(true);
    return (
      <div className="relative flex flex-col items-center">
        <div className="absolute">
          <Transition
            show={number == index}
            enter="transition transform translate-x duration-[1000ms]"
            enterFrom={clsx(
              "opacity-5 scale-50",
              number >= previousvalue ? "translate-x-60" : "-translate-x-60"
            )}
            enterTo="opacity-100 scale-100 translate-x-0"
            leave="transition transform duration-[1000ms]"
            leaveFrom=""
            leaveTo={clsx(
              "opacity-5 scale-50",
              number >= previousvalue ? "-translate-x-60" : "translate-x-60"
            )}
            afterLeave={() => {
              previousvalue = index;
              console.log(previousvalue);
            }}
          >
            <div className="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-5">
              {card.map((card) => {
                return (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${card?.poster_path}`}
                    alt=""
                    className="w-40 h-60 rounded-lg flex-grow-0"
                    key={card?.id}
                  />
                );
              })}
            </div>
          </Transition>
        </div>
      </div>
    );
  });
}
