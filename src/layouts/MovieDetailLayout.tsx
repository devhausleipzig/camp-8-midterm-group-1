import { NavLink, Outlet } from "react-router-dom";

const routesMovieDetail = [
  {
    name: "Movie Detail",
    path: "/",
  },
  {
    name: "Cast & Crew",
    path: "/cast&crew",
  },
  {
    name: "Select Date & Time",
    path: "/date&time",
  },
  {
    name: "Select Seats",
    path: "/selectseats",
  },
  {
    name: "Ticket",
    path: "/ticket",
  },
];

export function MovieDetailLayout() {
  return (
    <div>
      <h1>Movies</h1>

      {/* <nav>
  <NavLink to ="Cast">Cast&Crew</NavLink>
  <NavLink to= "SelectDateTime">Select Date & Time</NavLink>
</nav> */}

      <Outlet />
    </div>
  );
}
