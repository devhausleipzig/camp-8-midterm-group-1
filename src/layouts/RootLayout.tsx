import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/movies",

  },
  {
    name: "Genres",
    path: "/genres",
  },
  {
    name: "Login",
    path: "/login",
  },
  
];

export function RootLayout() {
  return (
    <div>
      {/* <footer className="bg-blue-900  flex justify-evenly p-3 text-white">
      
        <nav className="flex gap-3">
          {routes.map((route) => (
            <NavLink
              className={({ isActive }) =>
                clsx("hover:underline", isActive && "text-red-500")
              }
              key={route.name}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </footer> */}
      <Outlet />
    </div>
  );
}
