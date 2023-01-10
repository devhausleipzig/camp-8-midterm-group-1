import { HomeIcon } from "@heroicons/react/24/solid";
import { FilmIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";

export default function Navigationsbar() {
  const [selected, setSelected] = useState(0);
  const icons = [
    {
      name: <HomeIcon/>
    },
    {
      name: <FilmIcon />
    },
    {
      name: <UserIcon />
    },
    {
      name: <Bars4Icon />
    },
  ];

  return (
    <div className=" w-[375px] h-[88px] bg-dark ">
      <nav className="flex items-center justify-center mt-5 mx-3 ">
        {icons.map((icon) => ({icon.name}))}

        {/* <HomeIcon
          className={clsx(
            " w-16 h-16 mx-[2rem] ",
            selected == 0 ? "text-white" : "text-white-dimmed"
          )}
          onClick={() => setSelected(0)}
        /> 

        <FilmIcon
          className={clsx(
            " w-16 h-16 mx-[2rem]",
            selected == 1 ? "text-white" : "text-white-dimmed"
          )}
          onClick={() => setSelected(1)}
        />
        <Bars4Icon
          className={clsx(
            " w-16 h-16 mx-[2rem]",
            selected == 3 ? "text-white" : "text-white-dimmed"
          )}
          onClick={() => setSelected(3)}
        />
        <UserIcon
          className={clsx(
            " w-16 h-16 mx-[2rem]",
            selected == 2 ? "text-white" : "text-white-dimmed"
          )}
          onClick={() => setSelected(2)}
        /> */}
      </nav>
    </div>
  );
}
