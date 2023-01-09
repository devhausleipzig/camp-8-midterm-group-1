import { NavLink } from "react-router-dom";

export function NavigationBar() {
  return (
    <div>
      <nav className="bg-blue-900 flex justify-evenly p-2 text-white">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/Genres"> Genres </NavLink>
        <NavLink to="#"> </NavLink>
        <NavLink to="#"> </NavLink>
      </nav>
    </div>
  );
}
