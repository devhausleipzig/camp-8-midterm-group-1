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
import { RootLayout, MovieDetailLayout } from "./layouts";

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
        element: <MovieDetailLayout />,
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            element: <Post />,
            loader: postLoader,
          },
          {
            path: "castcrew",
            element: <CastCrew />,
          },
          {
            path: "selecttime",
            element: <SelectDateTime />,
            children: [
              {
                path: "selectseats",
                element: <SelectSeats />,
                children: [
                  {
                    path: "ticket",
                    element: <Ticket />,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "genres",
        element: <Genres />,
      },

      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
