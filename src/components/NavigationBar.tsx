import { NavLink } from "react-router-dom";

export function NavigationBar() {
  return (
    <div>
      <nav className="bg-blue-900 flex justify-evenly p-2 text-white">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/movies"> Movies </NavLink>
        <NavLink to="/genres"> Genres </NavLink>
        <NavLink to="/login"> Login </NavLink>
      </nav>
    </div>
  );
}
