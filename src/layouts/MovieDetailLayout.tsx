import { NavLink, Outlet } from "react-router-dom";


export function MovieDetailLayout() {
  return (
    <div>
      <h1>Movies</h1>
      <Outlet />
    </div>
  );
}
