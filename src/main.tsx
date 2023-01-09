import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Movies,
  Genres,
  Login,
  MovDetail,
  SelectDateTime,
  SelectSeats,
  Ticket,
  Post,
  Posts,
  postsLoader,
  postLoader,
  CastCrew,
} from "./routes";
import { RootLayout } from "./layouts/RootLayout";
import { MovieDetailLayout } from "./layouts/MovieDetailLayout";

const router = createBrowserRouter([
  {
    element: <Login />,
    index: true,
  },

  {
    element: <Movies />,
    path: "movies",
  },

  {
    element: <MovDetail />,
    path: "movdetail",
  },

  {
    element: <CastCrew />,
    path: "castcrew",
  },

  {
    element: <SelectDateTime />,
    path: "selectdatetime",
  },

  {
    element: <SelectSeats />,
    path: "selectseats",
  },

  {
    element: <Ticket />,
    path: "ticket",
  },

  {
    element: <RootLayout />,
    path: "layout",
    children: [
      {
        element: <Home />,
        path: "home",
      },
      {
        element: <Movies />,
        path: "movies",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
