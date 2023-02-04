import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Movies,
  Bookmark,
  Account,
  SelectDateTime,
  Ticket,
  CastCrew,
  Login,
  moviesLoader,
  Movie,
  movieLoader,
  ticketLoader,
  moviesArrayLoader,
  timesLoader,
  seatsLoader,
} from "./routes";
import { NavigationLayout } from "./layouts/NavigationLayout";
import { MovieDetailLayout } from "./layouts/MovieDetailLayout";
import { SelectSeats } from "./routes/SelectSeats";
import { castLoader } from "./routes/Cast";

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
        loader: moviesLoader,
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
        loader: moviesArrayLoader,
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
        loader: castLoader,
      },
      {
        path: ":movieId/selecttime",
        element: <SelectDateTime />,
        loader: timesLoader,
      },
      {
        path: ":movieId/selectseats",
        loader: seatsLoader,
        element: <SelectSeats />,
      },
      {
        path: ":movieId/ticket",
        element: <Ticket />,
        loader: ticketLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-dark">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
