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
import { RootLayout } from "./layouts/RootLayout";
import { MovieDetailLayout } from "./layouts/MovieDetailLayout";
import { CastAndCrew, castLoader } from "./components/CastAndCrew";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: <CastAndCrew id={500} />,
        loader: castLoader,
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
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
