import { useState } from "react";
import { API } from "./API";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import Moviespagebutton from "./MoviesPageButton";
import { Movie } from "../types/api";
import { useLoaderData } from "react-router-dom";

export async function getData() {
  return API.fourByFour();
}
export function Images() {
  const API = useLoaderData() as Movie[][];
  const [number, setNumber] = useState(0);

  let previousvalue = 0;
  return (
    <div className="relative bg-dark">
      {API.map((card, index) => {
        return (
          <div className="flex flex-col">
            <div className=" flex flex-col items-center">
              <div className="h-28"></div>
              <div className="absolute top-4">
                <Transition
                  show={number == index}
                  enter="transition transform translate-x duration-[1000ms]"
                  enterFrom={clsx(
                    "opacity-5 scale-50",
                    number >= previousvalue
                      ? "translate-x-60"
                      : "-translate-x-60"
                  )}
                  enterTo="opacity-100 scale-100 translate-x-0"
                  leave="transition transform duration-[1000ms]"
                  leaveFrom=""
                  leaveTo={clsx(
                    "opacity-5 scale-50",
                    number >= previousvalue
                      ? "-translate-x-60"
                      : "translate-x-60"
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
          </div>
        );
      })}
      <Moviespagebutton number={number} setNumber={setNumber} />
    </div>
  );
}
