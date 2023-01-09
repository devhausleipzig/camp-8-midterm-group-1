import { useState } from "react";
import React from "react";
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
    name: "Login",
    path: "/Login",
  },
  {
    name: "Icon3",
    path: "/icon3",
  },
  {
    name: "Icon4",
    path: "/icon4",
  },
];

export function RootLayout() {
  return (
    <div>
      <footer className="bg-slate-600 flex justify-between p-3 text-white">
        <span>Footer example</span>
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
      </footer>
      <Outlet />
    </div>
  );
}
