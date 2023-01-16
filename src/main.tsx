import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./index.css";
import {
  Home,
  Movies,
  Bookmark,
  Account,
  MovDetail,
  SelectDateTime,
  SelectSeats,
  Ticket,
  CastCrew,
  Login,
  MoviesLoader,
  Movie,
  movieLoader,
} from "./routes";
import { NavigationLayout } from "./layouts/NavigationLayout";
import { MovieDetailLayout } from "./layouts/MovieDetailLayout";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <NavigationLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },

      {
        path: "bookmark",
        element: <Bookmark />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "movies",
        element: <Movies />,
        loader: MoviesLoader,
      },
    ],
  },
  {
    path: "movie",
    element: <MovieDetailLayout />,
    children: [
      {
        path: ":movieId",
        element: <Movie />,
        loader: movieLoader,
      },
      {
        path: ":movieId/castcrew",
        element: <CastCrew />,
      },
      {
        path: ":movieId/selecttime",
        element: <SelectDateTime />,
      },
      {
        path: ":movieId/selectseats",
        element: <SelectSeats />,
      },
      {
        path: ":movieId/ticket",
        element: <Ticket />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-dark rounded-3xl">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
