import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import { Input } from "./routes/Input";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Input />,
      },
    ],
  },
]);

const form = document.getElementById("form-placeholder") as HTMLFormElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const fromEntries = formData.entries();
  const data = Object.fromEntries(formData.entries()) as Record<
    string,
    string | string[]
  >;

  const user: Record<string, any> = await axios.post(
    "http://0.0.0.0:3000/users",
    data
  );
  console.log(user.data);

  alert(`Successfully registered! Your user id is: ${user.data.id}`);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {" "}
    <RouterProvider router={router} />
  </React.StrictMode>
);
