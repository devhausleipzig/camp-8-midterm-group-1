import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./index.css";
import { Home, Movies, Icon3, Icon4, Login } from "./routes";
import { RootLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "movies",
        element: <Movies />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "icon3",
        element: <Icon3 />,
      },

      {
        path: "icon4",
        element: <Icon4 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
