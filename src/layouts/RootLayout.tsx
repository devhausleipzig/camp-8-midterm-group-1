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
    name: "Icon3",
    path: "/icon3",
  },
  {
    name: "Icon4",
    path: "/icon4",
  },
];

export function RootLayout() {
  return <div>RootLayout</div>;
}
