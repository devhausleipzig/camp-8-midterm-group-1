import { NavLink, Outlet } from "react-router-dom";

// const routesMovieDetail = [
//   {
//     name: "Movie Detail",
//     path: "/",
//   },
//   {
//     name: "Cast & Crew",
//     path: "/cast&crew",
//   },
//   {
//     name: "Select Date & Time",
//     path: "/date&time",
//   },
//   {
//     name: "Select Seats",
//     path: "/date&time/selectseats",
//   },
//   {
//     name: "Ticket",
//     path: "/date&time/selectseats/ticket",
//   },
// ];

export function MovieDetailLayout() {
  return (
    <div>
      <h1>Movies</h1>

      <Outlet />
    </div>
  );
}
