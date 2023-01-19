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
  SelectSeats,
  Ticket,
  CastCrew,
  Login,
  moviesLoader,
  Movie,
  movieLoader,
} from "./routes";
import { NavigationLayout } from "./layouts/NavigationLayout";
import { MovieDetailLayout } from "./layouts/MovieDetailLayout";
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
        loader: movieLoader,
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
        loader: moviesLoader,
      },
    ],
  },
  {
    path: "movie",
    element: <MovieDetailLayout />,
    children: [
      {
        path: ":movieId",
        element: <Movie/>,
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
    <div className="bg-dark">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);