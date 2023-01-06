import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Home, Movies, Icon3, Icon4 } from "./routes";
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },

      {
        path: "movies",
        element: <Movies />,
      },

      {
        path: "icon-3",
        element: <Icon3 />,
      },

      {
        path: "icon-4",
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
