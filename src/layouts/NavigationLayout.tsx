import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";
import {
  Bars4Icon,
  FilmIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const routes = [
  {
    name: <HomeIcon />,
    path: "/",
  },
  {
    name: <FilmIcon />,
    path: "/movies",
  },
  {
    name: <Bars4Icon />,
    path: "/bookmark",
  },
  {
    name: <UserIcon />,
    path: "/account",
  },
];

export function NavigationLayout() {
  return (
    <div className="h-screen flex flex-col">
      <main className="flex h-full">
        <Outlet />
      </main>
      <nav className=" flex justify-center py-8 gap-12 bg-dark">
        {routes.map((item) => (
          <NavLink
            className={({ isActive }) =>
              clsx(" w-6 h-6", isActive ? " text-white" : " text-white-dimmed")
            }
            key={item.path}
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
