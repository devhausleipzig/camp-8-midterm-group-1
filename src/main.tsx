import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Movies,
  Bookmark,
  Account,
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
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "movie",
        element: <MovieDetailLayout />,
        children: [
          {
            path: ":postId",
            element: <Post />,
            loader: postLoader,
            children: [
              {
                path: ":postId/castcrew",
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
