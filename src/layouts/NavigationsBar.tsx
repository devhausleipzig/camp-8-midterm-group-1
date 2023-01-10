import { HomeIcon } from "@heroicons/react/24/solid";
import { FilmIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navigationsbar() {
  return (
    <div className=" w-[375px] h-[88px] bg-dark ">
      <nav className="flex items-center justify-center mt-5 mx-3 ">
        <HomeIcon className=" text-white w-16 h-16 mx-[2rem] " />{" "}
        {/*className= {({ isActive}) => clsx("hover: text-white", isActive && "text-white w-16 h-16")} />  */}
        <FilmIcon className=" text-white-dimmed w-16 h-16 mx-[2rem]" />
        <UserIcon className=" text-white-dimmed w-16 h-16 mx-[2rem]" />
        <Bars4Icon className=" text-white-dimmed w-16 h-16 mx-[2rem]" />
        {/* <NavLink
          className={({ isActive }) =>
            clsx(
              "hover: text-white",
              isActive && " text-white-dimmed w-16 h-16"
            )
          }
          to={""}
        >
          <HomeIcon></HomeIcon>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(
              "hover: text-white",
              isActive && " text-white-dimmed w-16 h-16"
            )
          }
          to={""}
        >
          <FilmIcon></FilmIcon>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(
              "hover: text-white",
              isActive && " text-white-dimmed w-16 h-16"
            )
          }
          to={""}
        >
          <UserIcon></UserIcon>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(
              "hover: text-white",
              isActive && " text-white-dimmed w-16 h-16"
            )
          }
          to={""}
        >
          <Bars4Icon></Bars4Icon>
        </NavLink> */}
      </nav>
    </div>
  );
}
