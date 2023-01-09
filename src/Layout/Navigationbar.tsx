import { HomeIcon } from "@heroicons/react/24/solid";
import { FilmIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
/* import { NavLink } from "react-router-dom";
import clsx from "clsx"; */

export default function Navigationbar() {
  return (
    <div>
      <nav className="flex gap-3">
        <HomeIcon className=" text-white w-16 h-16" />
        <FilmIcon className=" text-white opacity-40 w-16 h-16" />
        <UserIcon className=" text-white opacity-40 w-16 h-16" />
        <Bars4Icon className=" text-white opacity-40 w-16 h-16" />
      </nav>
    </div>
  );
}
